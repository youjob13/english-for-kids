import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { ICardsState } from '../shared/interfaces/store-models';
import { cardsAPI, categoryAPI } from '../shared/api/api';

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState: {
    cardsData: [],
    playingList: [],
    isFetching: true,
    currentPageCount: 1,
    totalPageCount: 1,
    isForbiddenError: false,
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
    setAllCards: (state: ICardsState, action) => {
      const { words, totalPageCount } = action.payload;
      return {
        ...state,
        cardsData: [...state.cardsData, ...words],
        totalPageCount,
      };
    },
    setNewCard: (state: ICardsState, action) => {
      const { categoryId, newCard } = action.payload;

      return {
        ...state,
        cardsData: state.cardsData.map((cardData) => {
          if (cardData._id === categoryId) {
            return {
              ...cardData,
              words: [...cardData.words, newCard],
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
              words: cardData.words.map((word) => {
                if (word._id === cardId) {
                  return {
                    ...updatedCard,
                  };
                }
                return word;
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
              words: cardData.words.filter((word) => word._id !== cardId),
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
          cardData._id === categoryId
            ? { ...cardData, category: updatedCategory.category }
            : cardData
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
    nullifyCards: (state: ICardsState) => ({
      ...state,
      cardsData: [],
    }),
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
  nullifyCards,
} = cardsSlice.actions;

export const getWords =
  (
    _limit?: number,
    _page?: number
  ): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    // dispatch(toggleIsFetching(false));

    const { words, totalPageCount } = await cardsAPI.getWords(_limit, _page);
    // dispatch(toggleIsFetching(true));
    dispatch(setAllCards({ words, totalPageCount }));
  };

// TODO: realise preloader
export const createWord =
  (
    data: FormData,
    categoryId: string
  ): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    const newCard = await cardsAPI.createWord(data, categoryId);
    dispatch(setNewCard({ categoryId, newCard }));
  };

export const updateWord =
  (
    id: string,
    categoryId: string,
    data: FormData
  ): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    const updatedCard = await cardsAPI.updateWord(id, data);
    dispatch(setUpdatedCard({ cardId: id, categoryId, updatedCard }));
  };

export const removeWord =
  (
    id: string,
    categoryId: string
  ): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    await cardsAPI.removeWord(id);
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
