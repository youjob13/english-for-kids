import { createSlice } from '@reduxjs/toolkit';
import {
  GameReducerType,
  StateType,
  ThunkActionType,
  IDifficultWordsState,
} from '../shared/interfaces/store-models';
import { ICardsData } from '../shared/interfaces/cards-models';
import { Slice } from '../shared/globalVariables';

const difficultWordsSlice = createSlice({
  name: Slice.DIFFICULT_WORDS,
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
    wordsStatistics: string[],
    cards: ICardsData[]
  ): ThunkActionType<StateType<GameReducerType>> =>
  async (dispatch): Promise<void> => {
    const allWords = cards.map(({ words }) => words).flat();
    const difficultCards = allWords.filter((word) =>
      wordsStatistics.includes(word._id)
    );
    dispatch(setDifficultWords(difficultCards));
  };
