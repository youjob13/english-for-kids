import { ICard } from './cards-models';

export interface ICardsState {
  selectedCategory: ICard | {};
  cards: ICard[];
}
