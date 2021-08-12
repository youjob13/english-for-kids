import { createSlice } from '@reduxjs/toolkit';
import {
  GameReducerType,
  StateType,
  IGameState,
  ThunkActionType,
} from '../shared/interfaces/store-models';
import { IWord } from '../shared/interfaces/cards-models';
import sortCurrentGameQuestionList from '../shared/helperFunctions/arraySort';
import { GameMode, Slice, THREE_SECOND_DELAY } from '../shared/globalVariables';

const gameSlice = createSlice({
  name: Slice.GAME,
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
    }),
    resetGameData: (state: IGameState) => ({
      ...state,
      currentQuestion: null,
      lastAnswer: null,
      currentGameWordList: [],
      currentGameAnswers: [],
    }),
    startGame: (state: IGameState, action) => {
      const cards: IWord[] = action.payload;

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
      const answer: IWord = action.payload;

      return {
        ...state,
        lastAnswer: answer,
        currentGameCardList: state.currentGameCardList.filter(
          (word) => word._id !== answer._id
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
  resetGameData,
} = gameSlice.actions;

export const prepareGameProcess =
  (words: IWord[]): ThunkActionType<StateType<GameReducerType>> =>
  async (dispatch): Promise<void> => {
    dispatch(startGame(sortCurrentGameQuestionList(words)));
    dispatch(setAudioQuestion());
  };

export const setGivenAnswer =
  (
    answer: IWord,
    answerResult: boolean
  ): ThunkActionType<StateType<GameReducerType>> =>
  async (dispatch, getState): Promise<void> => {
    if (answerResult) {
      dispatch(setRightAnswer(answer));

      dispatch(setAudioQuestion());

      const newQuestion = getState().gameReducer.currentQuestion;

      if (!newQuestion) {
        dispatch(toggleEndGamePopupMode(true));

        setTimeout(() => {
          dispatch(toggleEndGamePopupMode(false));
          dispatch(stopGame(GameMode.READY_TO_GAME));
          dispatch(resetGameData());
        }, THREE_SECOND_DELAY);
      }

      return;
    }

    dispatch(setFalseAnswer());
  };
