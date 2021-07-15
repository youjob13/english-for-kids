import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { ICardsState } from '../shared/interfaces/store-models';
import { cardsAPI } from '../shared/api/api';

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
    const cardsData = await cardsAPI.getCards();

    dispatch(toggleIsFetching(false));

    setTimeout(() => {
      dispatch(toggleIsFetching(true));
      dispatch(setAllCards(cardsData)); // TODO: remove
    }, 1000);
  };

export const updateCard =
  (
    id: string,
    categoryId: string,
    data: any
  ): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    await cardsAPI.updateCard(id, categoryId, data);
    dispatch(getAllCards()); // TODO: пересчитывать чтобы не обновлять все карточки
  };

export const removeCard =
  (
    id: string,
    categoryId: string
  ): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    await cardsAPI.removeCard(id, categoryId);
    dispatch(getAllCards());
  };

export const updateCategory =
  (data: {
    prevCategoryName: string;
    newCategoryName: string;
  }): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    const cardsData = await cardsAPI.updateCategoryName(data);
    dispatch(setAllCards(cardsData));
  };

export const removeCategory =
  (id: number): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    await cardsAPI.removeCategory(id);
    dispatch(getAllCards());
  };
