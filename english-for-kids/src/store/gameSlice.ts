import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { IGameState } from '../shared/interfaces/store-models';
import { ICardItem } from '../shared/interfaces/cards-models';
import sortCurrentGameQuestionList from '../shared/helpersFunction/arraySort';

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
  },
});

export default gameSlice.reducer;

export const { setAudioQuestion, startGame, toggleGameMode } =
  gameSlice.actions;

export const prepareGameProcess =
  (cards: ICardItem[]): ThunkAction<void, IGameState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    dispatch(startGame(sortCurrentGameQuestionList(cards)));
    dispatch(setAudioQuestion());
  };
