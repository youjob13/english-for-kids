import { createSlice } from '@reduxjs/toolkit';
import {
  GameReducerType,
  StateType,
  IGameState,
  ThunkActionType,
} from '../shared/interfaces/store-models';
import { ICardItem } from '../shared/interfaces/cards-models';
import sortCurrentGameQuestionList from '../shared/helperFunctions/arraySort';
import playAudio from '../shared/helperFunctions/playSound';
import { GameMode } from '../shared/globalVariables';

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState: {
    gameMode: GameMode.NO_GAME,
    currentGameCardList: [],
    currentQuestion: null,
    lastAnswer: null,
    currentGameAnswers: [],
    isActiveEndGamePopup: false,
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
      currentGameAnswers: [], // TODO: reset reducer
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
    stopGame: (state: IGameState, action) => ({
      ...state,
      gameMode: action.payload,
      currentGameAnswers: [], // TODO: reset reducer
      currentGameCardList: [],
      currentQuestion: null,
      lastAnswer: null,
    }),
    toggleEndGamePopupMode: (state: IGameState, action) => ({
      ...state,
      isActiveEndGamePopup: action.payload,
    }),
    setNoGameMode: (state: IGameState) => ({
      ...state,
      gameMode: GameMode.READY_TO_GAME,
    }),
  },
});

export default gameSlice.reducer;

export const {
  toggleEndGamePopupMode,
  stopGame,
  setFalseAnswer,
  setRightAnswer,
  setAudioQuestion,
  startGame,
  toggleGameMode,
} = gameSlice.actions;

export const prepareGameProcess =
  (cards: ICardItem[]): ThunkActionType<StateType<GameReducerType>> =>
  async (dispatch): Promise<void> => {
    dispatch(startGame(sortCurrentGameQuestionList(cards)));
    dispatch(setAudioQuestion());
  };

export const setGivenAnswer =
  (
    answer: ICardItem,
    answerResult: boolean
  ): ThunkActionType<StateType<GameReducerType>> =>
  async (dispatch, getState): Promise<void> => {
    // const question = getState().gameReducer.currentQuestion;

    if (answerResult) {
      dispatch(setRightAnswer(answer));

      playAudio('/assets/success.mp3'); // TODO: think about it
      dispatch(setAudioQuestion());

      const newQuestion = getState().gameReducer.currentQuestion;
      if (!newQuestion) {
        dispatch(toggleEndGamePopupMode(true));

        setTimeout(() => {
          dispatch(toggleEndGamePopupMode(false));
          dispatch(stopGame(GameMode.READY_TO_GAME));
        }, 3000);
      }

      return;
    }

    dispatch(setFalseAnswer());
    // updateWordStatistics(question!.name, false);

    playAudio('/assets/error.mp3');
  };
