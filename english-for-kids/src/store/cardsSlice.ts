import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { ICardsState } from '../shared/interfaces/store-models';
import { ICardsData } from '../shared/interfaces/cards-models';
import cardsData from '../cards.json';

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState: {
    cards: [],
  } as ICardsState,
  reducers: {
    setAllCards: (state: ICardsState, action) => {
      return {
        ...state,
        cards: action.payload.map((card: ICardsData) => card), // TODO: spread operator
      };
    },
  },
});

export default cardsSlice.reducer;

export const { setAllCards } = cardsSlice.actions;

export const getAllCards =
  (): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    // const cards = await cardsAPI.getCards();
    const cards = cardsData;
    dispatch(setAllCards(cards));
  };
