import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { ICardsState } from '../shared/interfaces/store-models';
import { cardsAPI, categoryAPI } from '../shared/api/api';

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
    setNewCard: (state: ICardsState, action) => {
      const { categoryId, newCard } = action.payload;

      return {
        ...state,
        cardsData: state.cardsData.map((cardData) => {
          if (cardData._id === categoryId) {
            return {
              ...cardData,
              cards: [...cardData.cards, newCard],
            };
          }
          return cardData;
        }),
      };
    },
    setUpdatedCard: (state: ICardsState, action) => {
      const { cardId, categoryId, updatedCard } = action.payload;

      return {
        ...state,
        cardsData: state.cardsData.map((cardData) => {
          if (cardData._id === categoryId) {
            return {
              ...cardData,
              cards: cardData.cards.map((card) => {
                if (card._id === cardId) {
                  return {
                    ...updatedCard,
                  };
                }
                return card;
              }),
            };
          }
          return cardData;
        }),
      };
    },
    setCardsWithoutDeletedCard: (state: ICardsState, action) => {
      const { categoryId, cardId } = action.payload;

      return {
        ...state,
        cardsData: state.cardsData.map((cardData) => {
          if (cardData._id === categoryId) {
            return {
              ...cardData,
              cards: cardData.cards.filter((card) => card._id !== cardId),
            };
          }
          return cardData;
        }),
      };
    },
    setNewCategory: (state: ICardsState, action) => {
      const { createdCategory } = action.payload;

      return {
        ...state,
        cardsData: [...state.cardsData, createdCategory],
      };
    },
    setUpdatedCategory: (state: ICardsState, action) => {
      const { categoryId, updatedCategory } = action.payload;

      return {
        ...state,
        cardsData: state.cardsData.map((cardData) =>
          cardData._id === categoryId ? updatedCategory : cardData
        ),
      };
    },
    setCategoryWithoutDeletedCategory: (state: ICardsState, action) => {
      const { categoryId } = action.payload;

      return {
        ...state,
        cardsData: state.cardsData.filter(
          (cardData) => cardData._id !== categoryId
        ),
      };
    },
  },
});

export default cardsSlice.reducer;

export const {
  toggleIsFetching,
  removeWordFromPLayingList,
  updatePlayingList,
  setAllCards,
  setNewCard,
  setUpdatedCard,
  setCardsWithoutDeletedCard,
  setNewCategory,
  setUpdatedCategory,
  setCategoryWithoutDeletedCategory,
} = cardsSlice.actions;

export const getAllCards =
  (): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    dispatch(toggleIsFetching(false));

    const cardsData = await cardsAPI.getCards();

    dispatch(toggleIsFetching(true));
    dispatch(setAllCards(cardsData));
  };

// TODO: realise preloader
export const createCard =
  (
    data: FormData,
    categoryId: string
  ): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    const newCard = await cardsAPI.createCard(data, categoryId);
    dispatch(setNewCard({ categoryId, newCard }));
  };

export const updateCard =
  (
    id: string,
    categoryId: string,
    data: FormData
  ): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    console.log({ id, categoryId, data });
    const updatedCard = await cardsAPI.updateCard(id, categoryId, data);
    dispatch(setUpdatedCard({ cardId: id, categoryId, updatedCard }));
  };

export const removeCard =
  (
    id: string,
    categoryId: string
  ): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    await cardsAPI.removeCard(id, categoryId);
    dispatch(setCardsWithoutDeletedCard({ categoryId, cardId: id }));
  };

export const createCategory =
  (categoryName: string): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    const createdCategory = await categoryAPI.createCategory(categoryName);
    dispatch(setNewCategory({ createdCategory }));
  };

export const updateCategory =
  (
    categoryId: string,
    newCategoryName: string
  ): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    const updatedCategory = await categoryAPI.updateCategoryName(
      categoryId,
      newCategoryName
    );
    dispatch(setUpdatedCategory({ categoryId, updatedCategory }));
  };

export const removeCategory =
  (categoryId: string): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    await categoryAPI.removeCategory(categoryId);
    dispatch(setCategoryWithoutDeletedCategory({ categoryId }));
  };
