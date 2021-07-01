export interface RouteParams {
  category: string;
}

export interface IWordStatisticData {
  category: string;
  wordName: string;
  translation: string;
  asked: number;
  train: number;
  hit: number;
  wrong: number;
  wrongPercent: number;
}

export enum SortingTypes {
  CATEGORY = 'CATEGORY',
  WORD = 'WORD',
  TRANSLATION = 'TRANSLATION',
  ASKED = 'ASKED',
  TRAIN = 'TRAIN',
  HIT = 'HIT',
  WRONG = 'WRONG',
  WRONG_PERCENT = 'WRONG_PERCENT',
}
