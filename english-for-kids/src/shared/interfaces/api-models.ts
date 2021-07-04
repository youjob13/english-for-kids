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
