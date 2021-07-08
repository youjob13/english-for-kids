import { createSlice } from '@reduxjs/toolkit';
import {
  IStatisticState,
  StateType,
  StatisticReducerType,
  ThunkActionType,
} from '../shared/interfaces/store-models';
import calcPercentByCondition from '../shared/helpersFunction/calcPercentByCondition';

const statisticSlice = createSlice({
  name: 'statisticSlice',
  initialState: {
    statisticsData: [],
    isFetching: true,
    difficultWords: [],
  } as IStatisticState,
  reducers: {
    setDifficultWords: (state: IStatisticState, action) => ({
      ...state,
      difficultWords: [...action.payload],
    }),
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

export const { setDifficultWords, toggleIsFetching, setStatisticsData } =
  statisticSlice.actions;

export interface IWordStatistic {
  trainCounter?: number;
  askedCounter?: number;
  trueAnswerCounter?: number;
  falseAnswerCounter?: number;
}

export const getStatistics =
  (): ThunkActionType<StateType<StatisticReducerType>> =>
  async (dispatch): Promise<void> => {
    const statisticsData = { ...localStorage };

    dispatch(toggleIsFetching(false));
    setTimeout(() => {
      dispatch(toggleIsFetching(true));
      dispatch(setStatisticsData(statisticsData));
    }, 1000);
  };

export const resetStatistics =
  (): ThunkActionType<StateType<StatisticReducerType>> =>
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

const defineDifficultWords = (words: any): any => {
  const falseAnswers = Object.entries(words)
    .sort((elem: [string, any], nextElem: any) => {
      const firstWord = calcPercentByCondition(
        JSON.parse(elem[1]).falseAnswerCounter || 0,
        JSON.parse(elem[1]).trueAnswerCounter || 0
      );
      const secondWord = calcPercentByCondition(
        JSON.parse(nextElem[1]).falseAnswerCounter || 0,
        JSON.parse(nextElem[1]).trueAnswerCounter || 0
      );
      return firstWord - secondWord;
    })
    .map((elem) => elem[0]);
  falseAnswers.length = 8;

  return falseAnswers;
};

export const getDifficultWordsStatistics =
  (): ThunkActionType<StateType<StatisticReducerType>> =>
  async (dispatch, getState): Promise<void> => {
    const { statisticsData } = getState().statisticReducer;

    const difficultWords = defineDifficultWords(statisticsData);

    dispatch(setDifficultWords(difficultWords));

    // dispatch(toggleIsFetching(false));
    // setTimeout(() => {
    //   dispatch(toggleIsFetching(true));
    //   dispatch(setStatisticsData([]));
    // }, 1000);
  };
