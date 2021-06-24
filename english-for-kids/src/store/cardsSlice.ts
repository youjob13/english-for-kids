import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { ICardsState } from '../shared/interfaces/store-models';
import { ICard } from '../shared/interfaces/cards-models';
import cardsData from '../cards.json';

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState: {
    cards: [],
    selectedCategory: {
      category: '',
      cards: [''],
    },
  } as ICardsState,
  reducers: {
    setAllCards: (state: ICardsState, action) => {
      return {
        ...state,
        cards: action.payload.map((card: ICard) => card), // TODO: spread operator
      };
    },
    selectCategory: (state: ICardsState, action) => {
      const categoryName = action.payload;
      return {
        ...state,
        selectedCategory: {
          ...(state.cards.find(
            (card) => card.category === categoryName && card.cards
          ) || { category: '', cards: [''] }), // TODO: remove ||
        },
      };
    },
  },
});

export default cardsSlice.reducer;

export const { selectCategory, setAllCards } = cardsSlice.actions;

export const getAllCards =
  (): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    // const cards = await cardsAPI.getCards();
    const cards = cardsData;
    dispatch(setAllCards(cards));
  };
