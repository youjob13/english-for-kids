import { createSlice } from '@reduxjs/toolkit';
import {
  IStatisticState,
  StateType,
  StatisticReducerType,
  ThunkActionType,
} from '../shared/interfaces/store-models';
import calcPercentByCondition from '../shared/helperFunctions/calcPercentByCondition';
import { statisticsAPI } from '../shared/api/api';
import { Slice, StatisticsParam } from '../shared/globalVariables';
import { IWordStatistic } from '../shared/interfaces/api-models';

const statisticSlice = createSlice({
  name: Slice.STATISTICS,
  initialState: {
    wordsStatistics: [],
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
  },
});

export default statisticSlice.reducer;

export const { setDifficultWords, setUpdatedWord, setWordsStatistics } =
  statisticSlice.actions;

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
    console.log(wordsStatistics);
    dispatch(setWordsStatistics(wordsStatistics));
  };

export const resetStatistics =
  (): ThunkActionType<StateType<StatisticReducerType>> =>
  async (dispatch): Promise<void> => {
    await statisticsAPI.resetWordsStatistics();
    dispatch(setWordsStatistics([]));
  };
const defineDifficultWords = (words: IWordStatistic[]): string[] => {
  const falseAnswers = [...words]
    .sort((wordStatistics, nextWordStatistics) => {
      if (!wordStatistics.wrong && !wordStatistics.hit) {
        return -1;
      }
      const firstWord = calcPercentByCondition(
        wordStatistics.wrong || 0,
        wordStatistics.hit || 0
      );

      const secondWord = calcPercentByCondition(
        nextWordStatistics.wrong || 0,
        nextWordStatistics.hit || 0
      );

      if (firstWord === 100 || secondWord === 100) {
        return -1;
      }
      return firstWord - secondWord;
    })
    .filter(
      (wordStatistics) =>
        calcPercentByCondition(
          wordStatistics.wrong || 0,
          wordStatistics.hit || 0
        ) !== 100
    )
    .map((wordStatistics) => wordStatistics._id);
  falseAnswers.length = 8;

  return falseAnswers;
};

export const getDifficultWordsStatistics =
  (): ThunkActionType<StateType<StatisticReducerType>> =>
  async (dispatch, getState): Promise<void> => {
    const { wordsStatistics } = getState().statisticReducer;
    const difficultWords = defineDifficultWords(wordsStatistics);

    dispatch(setDifficultWords(difficultWords));
  };
