import {
  CardsReducerType,
  DifficultWordsReducerType,
  GameReducerType,
  StatisticReducerType,
} from './interfaces/store-models';

export const getWordsState = (state: CardsReducerType) => state.cardsReducer;

export const getGameState = (state: GameReducerType) => state.gameReducer;

export const getDifficultWordsState = (state: DifficultWordsReducerType) =>
  state.difficultWordsReducer;

export const getStatisticsState = (state: StatisticReducerType) =>
  state.statisticReducer;
