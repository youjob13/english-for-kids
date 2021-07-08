import { IWordStatisticData, SortingTypes } from '../interfaces/api-models';

const sortTable = (
  unsortedList: IWordStatisticData[],
  sortingType: { sortBy: string; sortFromTop: boolean }
): IWordStatisticData[] => {
  switch (sortingType.sortBy) {
    case SortingTypes.CATEGORY: {
      if (sortingType.sortFromTop) {
        // TODO: optimize
        return unsortedList.sort((a, b) => {
          const prevName = a.category.toLowerCase();
          const nextName = b.category.toLowerCase();
          if (prevName < nextName) {
            return -1;
          }
          if (prevName > nextName) {
            return 1;
          }
          return 0;
        });
      }
      return unsortedList.sort((a, b) => {
        const prevName = a.category.toLowerCase();
        const nextName = b.category.toLowerCase();
        if (prevName > nextName) {
          return -1;
        }
        if (prevName < nextName) {
          return 1;
        }
        return 0;
      });
    }
    case SortingTypes.WORD: {
      if (sortingType.sortFromTop) {
        // TODO: optimize
        return unsortedList.sort((a, b) => {
          const prevName = a.wordName.toLowerCase();
          const nextName = b.wordName.toLowerCase();
          if (prevName < nextName) {
            return -1;
          }
          if (prevName > nextName) {
            return 1;
          }
          return 0;
        });
      }
      return unsortedList.sort((a, b) => {
        const prevName = a.wordName.toLowerCase();
        const nextName = b.wordName.toLowerCase();
        if (prevName > nextName) {
          return -1;
        }
        if (prevName < nextName) {
          return 1;
        }
        return 0;
      });
    }
    case SortingTypes.TRANSLATION: {
      if (sortingType.sortFromTop) {
        // TODO: optimize
        return unsortedList.sort((a, b) => {
          const prevName = a.translation.toLowerCase();
          const nextName = b.translation.toLowerCase();
          if (prevName < nextName) {
            return -1;
          }
          if (prevName > nextName) {
            return 1;
          }
          return 0;
        });
      }
      return unsortedList.sort((a, b) => {
        const prevName = a.translation.toLowerCase();
        const nextName = b.translation.toLowerCase();
        if (prevName > nextName) {
          return -1;
        }
        if (prevName < nextName) {
          return 1;
        }
        return 0;
      });
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
    case SortingTypes.WRONG_PERCENT: {
      return unsortedList.sort((a, b) =>
        sortingType.sortFromTop
          ? a.wrongPercent - b.wrongPercent
          : b.wrongPercent - a.wrongPercent
      );
    }
    default: {
      return unsortedList;
    }
  }
};

export default sortTable;
