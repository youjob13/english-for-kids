export type AuthFormValue = 'username' | 'password';

export type LoginData = Record<AuthFormValue, string>;

export interface ILoginResponse {
  token?: string;
  message?: string;
}

export interface IWordStatistic {
  _id: string;
  train?: number;
  hit?: number;
  wrong?: number;
}

export interface RouteParams {
  category: string;
}

export interface ITableHeaderData {
  type: SortingTypes;
  name: string;
}

export interface ITableHeader {
  content: ITableHeaderData;
  selectSorting: (sortingTypeName: string) => void;
  selectedSortingType: string;
}

export interface IWordStatisticData {
  category: string;
  wordName: string;
  translation: string;
  train: number;
  hit: number;
  wrong: number;
  correctAnswersPercent: number;
}

export enum SortingTypes {
  CATEGORY = 'CATEGORY',
  WORD = 'WORD',
  TRANSLATION = 'TRANSLATION',
  TRAIN = 'TRAIN',
  HIT = 'HIT',
  WRONG = 'WRONG',
  CORRECT_ANSWERS_PERCENT = 'CORRECT_ANSWERS_PERCENT',
}

export interface IWordData {
  name: string;
  translate: string;
}

export type IFormState = (prevState: IWordData) => IWordData;
