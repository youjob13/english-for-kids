export interface ICardsData {
  _id: number;
  category: string;
  cards: ICardItem[];
}

export interface ICardItem {
  _id: string;
  name: string;
  imageSRC: string;
  translate: string;
  audioSRC: string;
}
