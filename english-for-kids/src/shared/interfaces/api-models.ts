export interface RouteParams {
  category: string;
}

export interface IWordStatisticData {
  category: string;
  wordName: string;
  translation: string;
  guessed: number;
  train: number;
  wrong: number;
  wrongPercent: number;
}

export enum SortingTypes {
  CATEGORY = 'CATEGORY',
  WORD = 'WORD',
  TRANSLATION = 'TRANSLATION',
  GUESSED = 'GUESSED',
  PLAY = 'PLAY',
  WRONG = 'WRONG',
  WRONG_PERCENT = 'WRONG_PERCENT',
}
