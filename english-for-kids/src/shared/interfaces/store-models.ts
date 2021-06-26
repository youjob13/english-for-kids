import { ICardItem, ICardsData } from './cards-models';

export interface ICardsState {
  cards: ICardsData[];
}

export interface IGameState {
  isReadyToStartedGame: boolean;
  isStartedGame: boolean;
  currentGameCardList: ICardItem[];
  currentQuestion: ICardItem | null;
}

export type CardsReducerType = { cardsReducer: ICardsState }; // TODO: change name
export type GameReducerType = { gameReducer: IGameState }; // TODO: change name
export type GameAndCardsReducerType = {
  gameReducer: IGameState;
  cardsReducer: ICardsState;
};
