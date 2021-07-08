import { createSlice } from '@reduxjs/toolkit';
import {
  GameReducerType,
  StateType,
  ThunkActionType,
  IDifficultWordsState,
} from '../shared/interfaces/store-models';
import { ICardsData } from '../shared/interfaces/cards-models';

const difficultWordsSlice = createSlice({
  name: 'difficultWordsSlice',
  initialState: {
    currentDifficultWordList: [],
  } as IDifficultWordsState,
  reducers: {
    setDifficultWords: (state: IDifficultWordsState, action) => ({
      ...state,
      currentDifficultWordList: [...action.payload],
    }),
  },
});

export default difficultWordsSlice.reducer;

export const { setDifficultWords } = difficultWordsSlice.actions;

export const getDifficultWords =
  (
    wordsStatistics: any,
    cards: ICardsData[]
  ): ThunkActionType<StateType<GameReducerType>> =>
  async (dispatch): Promise<void> => {
    const allCards = cards.map((category) => Object.values(category)).flat(4);
    const difficultCards = allCards.filter((card) =>
      wordsStatistics.includes(card.name)
    ); // TODO: полностью переделать
    dispatch(setDifficultWords(difficultCards));
  };
