import { createSlice } from '@reduxjs/toolkit';
import { IStatisticState } from '../shared/interfaces/store-models';

const statisticSlice = createSlice({
  name: 'statisticSlice',
  initialState: {} as IStatisticState,
  reducers: {
    s: (state: IStatisticState) => {
      return {
        ...state,
      };
    },
  },
});

export default statisticSlice.reducer;

export const { s } = statisticSlice.actions;

export interface IWordStatistic {
  trainCounter?: number;
  askedCounter?: number;
  rightAnswerCounter?: number;
  failAnswerCounter?: number;
}
