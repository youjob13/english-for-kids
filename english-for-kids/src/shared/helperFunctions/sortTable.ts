import {
  IWordStatisticData,
  SortingTypes,
  StringAndNumber,
} from '../interfaces/api-models';
import { SortProp } from '../globalVariables';

const sortAlphabet = (
  sortingType: { sortBy: string; sortFromTop: boolean },
  unsortedList: IWordStatisticData[],
  prop: string
): IWordStatisticData[] => {
  if (sortingType.sortFromTop) {
    return (unsortedList as unknown as Record<string, StringAndNumber>[]).sort(
      (a, b) => {
        const prevName = a[prop].toString().toLowerCase();
        const nextName = b[prop].toString().toLowerCase();
        if (prevName < nextName) {
          return -1;
        }
        if (prevName > nextName) {
          return 1;
        }
        return 0;
      }
    ) as unknown as IWordStatisticData[];
  }
  return (unsortedList as unknown as Record<string, StringAndNumber>[]).sort(
    (a, b) => {
      const prevName = a[prop].toString().toLowerCase();
      const nextName = b[prop].toString().toLowerCase();
      if (prevName > nextName) {
        return -1;
      }
      if (prevName < nextName) {
        return 1;
      }
      return 0;
    }
  ) as unknown as IWordStatisticData[];
};

const sortTable = (
  unsortedList: IWordStatisticData[],
  sortingType: { sortBy: string; sortFromTop: boolean }
): IWordStatisticData[] => {
  switch (sortingType.sortBy) {
    case SortingTypes.CATEGORY: {
      return sortAlphabet(sortingType, unsortedList, SortProp.CATEGORY);
    }
    case SortingTypes.WORD: {
      return sortAlphabet(sortingType, unsortedList, SortProp.WORD_NAME);
    }
    case SortingTypes.TRANSLATION: {
      return sortAlphabet(sortingType, unsortedList, SortProp.TRANSLATION);
    }
    case SortingTypes.TRAIN: {
      return unsortedList.sort((a, b) =>
        sortingType.sortFromTop ? a.train - b.train : b.train - a.train
      );
    }
    case SortingTypes.HIT: {
      return unsortedList.sort((a, b) =>
        sortingType.sortFromTop ? a.hit - b.hit : b.hit - a.hit
      );
    }
    case SortingTypes.WRONG: {
      return unsortedList.sort((a, b) =>
        sortingType.sortFromTop ? a.wrong - b.wrong : b.wrong - a.wrong
      );
    }
    case SortingTypes.CORRECT_ANSWERS_PERCENT: {
      return unsortedList.sort((a, b) =>
        sortingType.sortFromTop
          ? a.correctAnswersPercent - b.correctAnswersPercent
          : b.correctAnswersPercent - a.correctAnswersPercent
      );
    }
    default: {
      return unsortedList;
    }
  }
};

export default sortTable;
