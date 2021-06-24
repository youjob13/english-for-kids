import { ICard } from './cards-models';

export interface ICardsState {
  selectedCategory: ICard; // TODO: remove error
  cards: ICard[];
}

export type CardsReducerType = { cardsReducer: ICardsState }; // TODO: change name
