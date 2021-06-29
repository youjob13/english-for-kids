import { ICardItem, ICardsData } from './cards-models';
import { GameMode } from './props-models';

export interface ICardsState {
  cards: ICardsData[];
}

export interface IStatisticState {}

export interface IGameState {
  currentGameCardList: ICardItem[];
  currentQuestion: ICardItem | null;
  lastAnswer: ICardItem | null;
  gameMode: GameMode; // TODO: ?;
  currentGameStatistic: { rightAnswers: number; allAnswers: number };
}

export type CardsReducerType = { cardsReducer: ICardsState }; // TODO: change name
export type GameReducerType = { gameReducer: IGameState }; // TODO: change name
export type GameAndCardsReducerType = {
  gameReducer: IGameState;
  cardsReducer: ICardsState;
};
