import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { ICardsState } from '../shared/interfaces/store-models';
import test from '../test.json';

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState: {
    cardsData: [],
    playingList: [],
    isFetching: true,
  } as ICardsState,
  reducers: {
    updatePlayingList: (state: ICardsState, action) => ({
      ...state,
      playingList: [...state.playingList, action.payload],
    }),
    toggleIsFetching: (state: ICardsState, action) => ({
      ...state,
      isFetching: action.payload,
    }),
    removeWordFromPLayingList: (state: ICardsState) => {
      return {
        ...state,
        playingList: [],
      };
    },
    setAllCards: (state: ICardsState, action) => ({
      ...state,
      cardsData: [...action.payload],
    }),
  },
});

export default cardsSlice.reducer;

export const {
  toggleIsFetching,
  removeWordFromPLayingList,
  updatePlayingList,
  setAllCards,
} = cardsSlice.actions;

export const getAllCards =
  (): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    const cardsData = test;

    dispatch(toggleIsFetching(false));

    setTimeout(() => {
      dispatch(toggleIsFetching(true));
      dispatch(setAllCards(cardsData));
    }, 1000);
  };
