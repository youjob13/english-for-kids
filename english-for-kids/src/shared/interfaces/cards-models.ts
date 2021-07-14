export interface ICardsData {
  id: number;
  category: string;
  cards: ICardItem[];
}

export interface ICardItem {
  name: string;
  imageSRC: string;
  translate: string;
  audioSRC: string;
}
