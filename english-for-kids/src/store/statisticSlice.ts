import { AnyAction, createSlice, ThunkAction } from '@reduxjs/toolkit';
import {
  ICardsState,
  IStatisticState,
} from '../shared/interfaces/store-models';

const statisticSlice = createSlice({
  name: 'statisticSlice',
  initialState: {
    statisticsData: [],
    isFetching: true,
  } as IStatisticState,
  reducers: {
    toggleIsFetching: (state: IStatisticState, action) => ({
      ...state,
      isFetching: action.payload,
    }),
    setStatisticsData: (state: IStatisticState, action) => ({
      ...state,
      statisticsData: action.payload,
    }),
  },
});

export default statisticSlice.reducer;

export const { toggleIsFetching, setStatisticsData } = statisticSlice.actions;

export interface IWordStatistic {
  trainCounter?: number;
  askedCounter?: number;
  trueAnswerCounter?: number;
  falseAnswerCounter?: number;
}

export const getStatistics =
  (): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    const statisticsData = { ...localStorage };

    dispatch(toggleIsFetching(false));
    setTimeout(() => {
      dispatch(toggleIsFetching(true));
      dispatch(setStatisticsData(statisticsData));
    }, 1000);
  };

export const resetStatistics =
  (): ThunkAction<void, ICardsState, unknown, AnyAction> =>
  async (dispatch): Promise<void> => {
    const statisticsData = { ...localStorage };
    Object.keys(statisticsData).forEach((key) => {
      localStorage.removeItem(key);
    });
    // TODO: убрать костыль

    dispatch(setStatisticsData([]));

    // dispatch(toggleIsFetching(false));
    // setTimeout(() => {
    //   dispatch(toggleIsFetching(true));
    //   dispatch(setStatisticsData([]));
    // }, 1000);
  };
