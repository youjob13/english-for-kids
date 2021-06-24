export interface ICardsData {
  category: string;
  cards: ICardItem[];
}

export interface ICardItem {
  name: string;
  imageSRC: string;
  translate: string;
}
