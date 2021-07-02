import { createSlice } from '@reduxjs/toolkit';
import {
  GameReducerType,
  StateType,
  IGameState,
  ThunkActionType,
} from '../shared/interfaces/store-models';
import { ICardItem } from '../shared/interfaces/cards-models';
import sortCurrentGameQuestionList from '../shared/helpersFunction/arraySort';
import compareAnswerAndQuestion from '../shared/helpersFunction/compareTwoObjects';
import { GameMode } from '../shared/interfaces/props-models';
import { getWordStatistic } from '../shared/api/api';
import playAudio from '../shared/helpersFunction/playSound';

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState: {
    gameMode: GameMode.NO_GAME,
    currentGameCardList: [],
    currentQuestion: null,
    lastAnswer: null,
    currentGameAnswers: [],
  } as IGameState,
  reducers: {
    toggleGameMode: (state: IGameState) => ({
      ...state,
      gameMode:
        state.gameMode === GameMode.NO_GAME
          ? GameMode.READY_TO_GAME
          : GameMode.NO_GAME,
      currentQuestion: null,
      lastAnswer: null,
      currentGameCardList: [],
    }),
    startGame: (state: IGameState, action) => {
      const cards: ICardItem[] = action.payload;
      return {
        ...state,
        gameMode: GameMode.IN_GAME,
        currentGameCardList: cards.map((card) => card),
      };
    },
    setAudioQuestion: (state: IGameState) => ({
      ...state,
      currentQuestion: state.currentGameCardList[0],
    }),
    setRightAnswer: (state: IGameState, action) => {
      const answer: ICardItem = action.payload;
      return {
        ...state,
        lastAnswer: answer,
        currentGameCardList: state.currentGameCardList.filter(
          (card) => JSON.stringify(card) !== JSON.stringify(answer)
        ),
        currentGameAnswers: [...state.currentGameAnswers, true],
      };
    },
    setFalseAnswer: (state: IGameState) => ({
      ...state,
      currentGameAnswers: [...state.currentGameAnswers, false],
    }),
    stopGame: (state: IGameState) => ({
      ...state,
      gameMode: GameMode.SHOW_RESULT,
    }),
    setNoGameMode: (state: IGameState) => ({
      ...state,
      gameMode: GameMode.READY_TO_GAME,
    }),
    resetGameStatistics: (state: IGameState) => ({
      ...state,
      currentGameAnswers: [],
    }),
  },
});

export default gameSlice.reducer;

export const {
  stopGame,
  setFalseAnswer,
  setRightAnswer,
  setAudioQuestion,
  startGame,
  toggleGameMode,
  setNoGameMode,
  resetGameStatistics,
} = gameSlice.actions;

export const prepareGameProcess =
  (cards: ICardItem[]): ThunkActionType<StateType<GameReducerType>> =>
  async (dispatch): Promise<void> => {
    dispatch(startGame(sortCurrentGameQuestionList(cards)));
    dispatch(setAudioQuestion());
  };

const addUpdatedTrueAnswerWordStatisticToDataBase = (
  wordName: string
): void => {
  const currentWordStatistic = getWordStatistic(wordName);

  const currentTrueAnswerCounter =
    (currentWordStatistic && currentWordStatistic.trueAnswerCounter) || 0;

  localStorage[wordName] = JSON.stringify({
    ...currentWordStatistic,
    trueAnswerCounter: currentTrueAnswerCounter + 1,
  });
};

const addUpdatedFalseAnswerWordStatisticToDataBase = (
  wordName: string
): void => {
  const currentWordStatistic = getWordStatistic(wordName);

  const currentTrueAnswerCounter =
    (currentWordStatistic && currentWordStatistic.falseAnswerCounter) || 0;

  localStorage[wordName] = JSON.stringify({
    ...currentWordStatistic,
    falseAnswerCounter: currentTrueAnswerCounter + 1,
  });
};

export const setGivenAnswer =
  (answer: ICardItem): ThunkActionType<StateType<GameReducerType>> =>
  async (dispatch, getState): Promise<void> => {
    const question = getState().gameReducer.currentQuestion;
    const answerResult = compareAnswerAndQuestion(answer, question);

    if (answerResult) {
      dispatch(setRightAnswer(answer));

      playAudio('/assets/success.mp3');
      addUpdatedTrueAnswerWordStatisticToDataBase(answer.name);
      dispatch(setAudioQuestion());

      const newQuestion = getState().gameReducer.currentQuestion;
      if (!newQuestion) {
        dispatch(stopGame());
        setTimeout(() => {
          dispatch(setNoGameMode());
          dispatch(resetGameStatistics());
        }, 3000);
      }

      return;
    }
    dispatch(setFalseAnswer());
    playAudio('/assets/error.mp3');
    addUpdatedFalseAnswerWordStatisticToDataBase(answer.name);
  };
