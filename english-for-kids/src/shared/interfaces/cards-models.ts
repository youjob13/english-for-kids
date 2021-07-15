export interface ICardsData {
  id: number;
  category: string;
  cards: ICardItem[];
}

export interface ICardItem {
  id: string;
  name: string;
  imageSRC: string;
  translate: string;
  audioSRC: string;
}
