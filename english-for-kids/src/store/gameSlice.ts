import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { IGameState } from '../shared/interfaces/store-models';
import { ICardItem } from '../shared/interfaces/cards-models';
import sortCurrentGameQuestionList from '../shared/helpersFunction/arraySort';
import compareAnswerAndQuestion from '../shared/helpersFunction/compareTwoObjects';

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState: {
    isReadyToStartedGame: false,
    isStartedGame: false,
    currentGameCardList: [],
    currentQuestion: null,
  } as IGameState,
  reducers: {
    toggleGameMode: (state: IGameState) => ({
      ...state,
      isReadyToStartedGame: !state.isReadyToStartedGame,
    }),
    startGame: (state: IGameState, action) => {
      const cards: ICardItem[] = action.payload;
      return {
        ...state,
        isStartedGame: true,
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
        currentGameCardList: state.currentGameCardList.filter(
          (card) => JSON.stringify(card) !== JSON.stringify(answer)
        ), // TODO: ++ right attempt & all attempt
      };
    },
    setFalseAnswer: (state: IGameState) => ({
      ...state, // TODO: ++ false attempt & all attempt
    }),
  },
});

export default gameSlice.reducer;

export const {
  setFalseAnswer,
  setRightAnswer,
  setAudioQuestion,
  startGame,
  toggleGameMode,
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
      dispatch(setRightAnswer(answer));
      dispatch(setAudioQuestion());
    } else {
      dispatch(setFalseAnswer());
    }
  };
