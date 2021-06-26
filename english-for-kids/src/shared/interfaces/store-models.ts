import { ICardsData } from './cards-models';

export interface ICardsState {
  cards: ICardsData[];
}

export interface IGameState {
  isStartedGame: boolean;
}

export type CardsReducerType = { cardsReducer: ICardsState }; // TODO: change name
export type GameReducerType = { gameReducer: IGameState }; // TODO: change name
