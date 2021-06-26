export interface ICardsData {
  [key: string]: ICardItem[];
}

export interface ICardItem {
  name: string;
  imageSRC: string;
  translate: string;
  audioSRC: string;
}
