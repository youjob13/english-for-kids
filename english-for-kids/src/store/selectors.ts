import {
  CardsReducerType,
  DifficultWordsReducerType,
  GameReducerType,
  ICardsState,
  IDifficultWordsState,
  IGameState,
  IStatisticState,
  StatisticReducerType,
} from '../shared/interfaces/store-models';

export const getWordsState = (state: CardsReducerType): ICardsState =>
  state.cardsReducer;

export const getGameState = (state: GameReducerType): IGameState =>
  state.gameReducer;

export const getDifficultWordsState = (
  state: DifficultWordsReducerType
): IDifficultWordsState => state.difficultWordsReducer;

export const getStatisticsState = (
  state: StatisticReducerType
): IStatisticState => state.statisticReducer;
