import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { IGameState } from '../shared/interfaces/store-models';
import { ICardItem } from '../shared/interfaces/cards-models';
import sortCurrentGameQuestionList from '../shared/helpersFunction/arraySort';
import compareAnswerAndQuestion from '../shared/helpersFunction/compareTwoObjects';
import { GameMode } from '../shared/interfaces/props-models';

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState: {
    gameMode: GameMode.NO_GAME,
    currentGameCardList: [],
    currentQuestion: null,
    lastAnswer: null,
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
        ), // TODO: ++ right attempt & all attempt
      };
    },
    setFalseAnswer: (state: IGameState) => ({
      ...state, // TODO: ++ false attempt & all attempt
    }),
    stopGame: (state: IGameState) => ({
      ...state,
      gameMode: GameMode.SHOW_RESULT,
    }),
    setNoGameMode: (state: IGameState) => ({
      ...state,
      gameMode: GameMode.READY_TO_GAME,
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
} = gameSlice.actions;

export const prepareGameProcess =
  (cards: ICardItem[]): ThunkAction<void, IGameState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    dispatch(startGame(sortCurrentGameQuestionList(cards)));
    dispatch(setAudioQuestion());
  };

export const setGivenAnswer =
  (answer: ICardItem): ThunkAction<void, IGameState, unknown, AnyAction> =>
  async (dispatch, getState: any): Promise<void> => {
    const question = getState().gameReducer.currentQuestion;
    const answerResult = compareAnswerAndQuestion(answer, question);

    if (answerResult) {
      // TODO: watch strategy pattern
      dispatch(setRightAnswer(answer));
      dispatch(setAudioQuestion());

      const newQuestion = getState().gameReducer.currentQuestion;
      if (!newQuestion) {
        dispatch(stopGame());
        setTimeout(() => {
          dispatch(setNoGameMode());
        }, 3000);
      }
      return;
    }
    dispatch(setFalseAnswer());
  };
