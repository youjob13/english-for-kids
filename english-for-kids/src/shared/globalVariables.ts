import { ITableHeaderData, SortingTypes } from './interfaces/api-models';

const tableHeaders: ITableHeaderData[] = [
  {
    type: SortingTypes.CATEGORY,
    name: 'category',
  },
  {
    type: SortingTypes.WORD,
    name: 'word',
  },
  {
    type: SortingTypes.TRANSLATION,
    name: 'translation',
  },
  {
    type: SortingTypes.TRAIN,
    name: 'train',
  },
  {
    type: SortingTypes.HIT,
    name: 'hit',
  },
  {
    type: SortingTypes.WRONG,
    name: 'wrong',
  },
  {
    type: SortingTypes.CORRECT_ANSWERS_PERCENT,
    name: 'correct answers %',
  },
];
export default tableHeaders;
