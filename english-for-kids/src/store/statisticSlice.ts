import { createSlice } from '@reduxjs/toolkit';
import {
  IStatisticState,
  StateType,
  StatisticReducerType,
  ThunkActionType,
} from '../shared/interfaces/store-models';
import calcPercentByCondition from '../shared/helperFunctions/calcPercentByCondition';
import { statisticsAPI } from '../shared/api/api';
import { StatisticsParam } from '../shared/globalVariables';

const statisticSlice = createSlice({
  name: 'statisticSlice',
  initialState: {
    wordsStatistics: [],
    statisticsData: [],
    isFetching: true,
    difficultWords: [],
  } as IStatisticState,
  reducers: {
    setUpdatedWord: (state: IStatisticState, action) => {
      const { wordId, wordStatistics } = action.payload;

      return {
        ...state,
        wordsStatistics: state.wordsStatistics.map((word) =>
          word._id === wordId ? { ...wordStatistics } : word
        ),
      };
    },
    setWordsStatistics: (state: IStatisticState, action) => ({
      ...state,
      wordsStatistics: action.payload,
    }),
    setDifficultWords: (state: IStatisticState, action) => ({
      ...state,
      difficultWords: [...action.payload],
    }),
    toggleIsFetching: (state: IStatisticState, action) => ({
      ...state,
      isFetching: action.payload,
    }),
  },
});

export default statisticSlice.reducer;

export const {
  setDifficultWords,
  toggleIsFetching,
  setUpdatedWord,
  setWordsStatistics,
} = statisticSlice.actions;

export const updateStatistics =
  (
    wordId: string,
    statisticsParam: StatisticsParam
  ): ThunkActionType<StateType<StatisticReducerType>> =>
  async (dispatch): Promise<void> => {
    let wordStatistics = {
      // TODO: костыль
      hit: false,
      wrong: false,
      train: false,
    };

    if (!wordStatistics) {
      return;
    }

    if (statisticsParam === StatisticsParam.TRAIN) {
      // TODO: спросить про паттерн стратегия
      wordStatistics = {
        ...wordStatistics,
        train: true,
      };
    } else if (statisticsParam === StatisticsParam.HIT) {
      wordStatistics = {
        ...wordStatistics,
        hit: true,
      };
    } else if (statisticsParam === StatisticsParam.WRONG) {
      wordStatistics = {
        ...wordStatistics,
        wrong: true,
      };
    }

    const updatedWord = await statisticsAPI.updateStatistics(
      wordId,
      wordStatistics
    );

    dispatch(setUpdatedWord(updatedWord));
  };

export const getStatistics =
  (): ThunkActionType<StateType<StatisticReducerType>> =>
  async (dispatch): Promise<void> => {
    const wordsStatistics = await statisticsAPI.getWordsStatistics();
    dispatch(setWordsStatistics(wordsStatistics));
  };

export const resetStatistics =
  (): ThunkActionType<StateType<StatisticReducerType>> =>
  async (dispatch): Promise<void> => {
    // dispatch(toggleIsFetching(true));
    await statisticsAPI.resetWordsStatistics();
    // dispatch(toggleIsFetching(false));
    dispatch(setWordsStatistics([]));
  };

const defineDifficultWords = (words: any): any => {
  const falseAnswers = Object.entries(words)
    .sort((elem: [string, any], nextElem: any) => {
      if (
        !JSON.parse(elem[1]).falseAnswerCounter &&
        !JSON.parse(elem[1]).trueAnswerCounter
      ) {
        return -1;
      }
      const firstWord = calcPercentByCondition(
        JSON.parse(elem[1]).falseAnswerCounter || 0,
        JSON.parse(elem[1]).trueAnswerCounter || 0
      );

      const secondWord = calcPercentByCondition(
        JSON.parse(nextElem[1]).falseAnswerCounter || 0,
        JSON.parse(nextElem[1]).trueAnswerCounter || 0
      );
      if (firstWord === 100 || secondWord === 100) {
        return -1;
      }
      return firstWord - secondWord;
    })
    .filter(
      (elem: any) =>
        calcPercentByCondition(
          JSON.parse(elem[1]).falseAnswerCounter || 0,
          JSON.parse(elem[1]).trueAnswerCounter || 0
        ) !== 100
    )
    .map((elem) => elem[0]);
  console.log(falseAnswers);
  falseAnswers.length = 8;

  return falseAnswers;
};

export const getDifficultWordsStatistics =
  (): ThunkActionType<StateType<StatisticReducerType>> =>
  async (dispatch, getState): Promise<void> => {
    const { statisticsData } = getState().statisticReducer;

    const difficultWords = defineDifficultWords(statisticsData);

    dispatch(setDifficultWords(difficultWords));
  };
