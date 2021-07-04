import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { ICardsState } from '../shared/interfaces/store-models';
import test from '../test.json';

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState: {
    cards: [],
    playingList: [],
  } as ICardsState,
  reducers: {
    updatePlayingList: (state: ICardsState, action) => ({
      ...state,
      playingList: [...state.playingList, action.payload],
    }),
    removeWordFromPLayingList: (state: ICardsState) => {
      return {
        ...state,
        playingList: [],
      };
    },
    setAllCards: (state: ICardsState, action) => ({
      ...state,
      cards: [...action.payload],
    }),
  },
});

export default cardsSlice.reducer;

export const { removeWordFromPLayingList, updatePlayingList, setAllCards } =
  cardsSlice.actions;

export const getAllCards =
  (): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    const cards = test;

    dispatch(setAllCards(cards));
  };
