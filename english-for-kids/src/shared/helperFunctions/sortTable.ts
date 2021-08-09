import { IWordStatisticData, SortingTypes } from '../interfaces/api-models';

const sortLetter = (
  sortingType: { sortBy: string; sortFromTop: boolean },
  unsortedList: IWordStatisticData[],
  prop: string
): IWordStatisticData[] => {
  if (sortingType.sortFromTop) {
    return unsortedList.sort(
      (a: { [key: string]: any }, b: { [key: string]: any }) => {
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
    );
  }
  return unsortedList.sort(
    (a: { [key: string]: any }, b: { [key: string]: any }) => {
      const prevName = a[prop].toLowerCase();
      const nextName = b[prop].toLowerCase();
      if (prevName > nextName) {
        return -1;
      }
      if (prevName < nextName) {
        return 1;
      }
      return 0;
    }
  );
};

const sortTable = (
  unsortedList: IWordStatisticData[],
  sortingType: { sortBy: string; sortFromTop: boolean }
): IWordStatisticData[] => {
  switch (sortingType.sortBy) {
    case SortingTypes.CATEGORY: {
      return sortLetter(sortingType, unsortedList, 'category');
      // if (sortingType.sortFromTop) {
      //   return unsortedList.sort((a, b) => {
      //     const prevName = a.category.toLowerCase();
      //     const nextName = b.category.toLowerCase();
      //     if (prevName < nextName) {
      //       return -1;
      //     }
      //     if (prevName > nextName) {
      //       return 1;
      //     }
      //     return 0;
      //   });
      // }
      // return unsortedList.sort((a, b) => {
      //   const prevName = a.category.toLowerCase();
      //   const nextName = b.category.toLowerCase();
      //   if (prevName > nextName) {
      //     return -1;
      //   }
      //   if (prevName < nextName) {
      //     return 1;
      //   }
      //   return 0;
      // });
    }
    case SortingTypes.WORD: {
      return sortLetter(sortingType, unsortedList, 'wordName');
      // if (sortingType.sortFromTop) {
      //   return unsortedList.sort((a, b) => {
      //     const prevName = a.wordName.toLowerCase();
      //     const nextName = b.wordName.toLowerCase();
      //     if (prevName < nextName) {
      //       return -1;
      //     }
      //     if (prevName > nextName) {
      //       return 1;
      //     }
      //     return 0;
      //   });
      // }
      // return unsortedList.sort((a, b) => {
      //   const prevName = a.wordName.toLowerCase();
      //   const nextName = b.wordName.toLowerCase();
      //   if (prevName > nextName) {
      //     return -1;
      //   }
      //   if (prevName < nextName) {
      //     return 1;
      //   }
      //   return 0;
      // });
    }
    case SortingTypes.TRANSLATION: {
      return sortLetter(sortingType, unsortedList, 'translation');
      // if (sortingType.sortFromTop) {
      //   return unsortedList.sort((a, b) => {
      //     const prevName = a.translation.toLowerCase();
      //     const nextName = b.translation.toLowerCase();
      //     if (prevName < nextName) {
      //       return -1;
      //     }
      //     if (prevName > nextName) {
      //       return 1;
      //     }
      //     return 0;
      //   });
      // }
      // return unsortedList.sort((a, b) => {
      //   const prevName = a.translation.toLowerCase();
      //   const nextName = b.translation.toLowerCase();
      //   if (prevName > nextName) {
      //     return -1;
      //   }
      //   if (prevName < nextName) {
      //     return 1;
      //   }
      //   return 0;
      // });
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
