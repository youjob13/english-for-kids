export interface ICardsData {
  _id: string;
  category: string;
  words: IWord[];
}

export interface IWord {
  _id: string;
  name: string;
  imageSRC: string;
  translate: string;
  audioSRC: string;
}
