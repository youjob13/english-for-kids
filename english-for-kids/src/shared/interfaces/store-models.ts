import { ICardsData } from './cards-models';

export interface ICardsState {
  selectedCategory: ICardsData; // TODO: remove error
  cards: ICardsData[];
}

export interface IGameState {
  isStartedGame: boolean;
}

export type CardsReducerType = { cardsReducer: ICardsState }; // TODO: change name
export type GameReducerType = { gameReducer: IGameState }; // TODO: change name
