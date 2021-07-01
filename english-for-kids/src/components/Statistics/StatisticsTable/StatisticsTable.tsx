import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from '../statistics.module.scss';
import TableCell from './TableCell/TableCell';
import {
  IWordStatisticData,
  SortingTypes,
} from '../../../shared/interfaces/api-models';
import { CardsReducerType } from '../../../shared/interfaces/store-models';
import { ICardItem } from '../../../shared/interfaces/cards-models';

const TABLE_STYLES = classes.table;
const TABLE_ROW_STYLES = classes.tableRow;
const TABLE_TITLE_STYLES = classes.tableTitle;
const TABLE_TITLE_ACTIVE_STYLES = `${classes.tableTitle} ${classes.tableTitleActive}`;
const TABLE_BODY_STYLES = classes.tableBody;

const sortList = (
  unsortedList: IWordStatisticData[],
  sortBy: { sortBy: string; sortToTop: boolean }
): IWordStatisticData[] => {
  switch (sortBy.sortBy) {
    case SortingTypes.CATEGORY: {
      return unsortedList.sort();
    }
    case SortingTypes.WORD: {
      return unsortedList.sort((a: any, b: any) =>
        sortBy.sortToTop ? a.word - b.word : b.word - a.word
      );
    }
    case SortingTypes.TRANSLATION: {
      return unsortedList.sort();
    }
    case SortingTypes.GUESSED: {
      return unsortedList.sort((a, b) =>
        sortBy.sortToTop ? a.guessed - b.guessed : b.guessed - a.guessed
      );
    }
    case SortingTypes.PLAY: {
      return unsortedList.sort((a, b) =>
        sortBy.sortToTop ? a.train - b.train : b.train - a.train
      );
    }
    case SortingTypes.WRONG: {
      return unsortedList.sort((a, b) =>
        sortBy.sortToTop ? a.wrong - b.wrong : b.wrong - a.wrong
      );
    }
    case SortingTypes.WRONG_PERCENT: {
      return unsortedList.sort((a, b) =>
        sortBy.sortToTop
          ? a.wrongPercent - b.wrongPercent
          : b.wrongPercent - a.wrongPercent
      );
    }
    default: {
      return unsortedList;
    }
  }
};

const StatisticsTable = (): ReactElement => {
  const { cards: cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );

  const arr2: IWordStatisticData[] = cardsData
    .map((cardsDataItem) => {
      const category = Object.keys(cardsDataItem).toString();
      const cards: ICardItem[] = Object.values(cardsDataItem)[0];
      return cards.map((card) => {
        return {
          wordName: card.name,
          translation: card.translate,
          guessed: 0,
          train: 0,
          wrong: 0,
          wrongPercent: 0,
          category,
        };
      });
    })
    .flat();

  console.log(arr2);

  const [sortingType, setSortingType] = useState({
    sortBy: '',
    sortToTop: false,
  });

  return (
    <table className={TABLE_STYLES}>
      <thead>
        <tr className={TABLE_ROW_STYLES}>
          <th className={TABLE_TITLE_STYLES}>№</th>
          <th
            onClick={() =>
              setSortingType({
                sortBy: SortingTypes.CATEGORY,
                sortToTop: !sortingType.sortToTop,
              })
            }
            className={
              sortingType.sortBy === SortingTypes.CATEGORY
                ? TABLE_TITLE_ACTIVE_STYLES
                : TABLE_TITLE_STYLES
            }
          >
            Category
          </th>
          <th
            onClick={() =>
              setSortingType({
                sortBy: SortingTypes.WORD,
                sortToTop: !sortingType.sortToTop,
              })
            }
            className={
              sortingType.sortBy === SortingTypes.WORD
                ? TABLE_TITLE_ACTIVE_STYLES
                : TABLE_TITLE_STYLES
            }
          >
            Word
          </th>
          <th
            onClick={() =>
              setSortingType({
                sortBy: SortingTypes.TRANSLATION,
                sortToTop: !sortingType.sortToTop,
              })
            }
            className={
              sortingType.sortBy === SortingTypes.TRANSLATION
                ? TABLE_TITLE_ACTIVE_STYLES
                : TABLE_TITLE_STYLES
            }
          >
            Translation
          </th>
          <th
            onClick={() =>
              setSortingType({
                sortBy: SortingTypes.GUESSED,
                sortToTop: !sortingType.sortToTop,
              })
            }
            className={
              sortingType.sortBy === SortingTypes.GUESSED
                ? TABLE_TITLE_ACTIVE_STYLES
                : TABLE_TITLE_STYLES
            }
          >
            Guessed
          </th>
          <th
            onClick={() =>
              setSortingType({
                sortBy: SortingTypes.PLAY,
                sortToTop: !sortingType.sortToTop,
              })
            }
            className={
              sortingType.sortBy === SortingTypes.PLAY
                ? TABLE_TITLE_ACTIVE_STYLES
                : TABLE_TITLE_STYLES
            }
          >
            Play
          </th>
          <th
            onClick={() =>
              setSortingType({
                sortBy: SortingTypes.WRONG,
                sortToTop: !sortingType.sortToTop,
              })
            }
            className={
              sortingType.sortBy === SortingTypes.WRONG
                ? TABLE_TITLE_ACTIVE_STYLES
                : TABLE_TITLE_STYLES
            }
          >
            Wrong
          </th>
          <th
            onClick={() =>
              setSortingType({
                sortBy: SortingTypes.WRONG_PERCENT,
                sortToTop: !sortingType.sortToTop,
              })
            }
            className={
              sortingType.sortBy === SortingTypes.WRONG_PERCENT
                ? TABLE_TITLE_ACTIVE_STYLES
                : TABLE_TITLE_STYLES
            }
          >
            % wrong
          </th>
        </tr>
      </thead>
      <tbody className={TABLE_BODY_STYLES}>
        {sortList(arr2, sortingType).map((elem, index) => (
          <TableCell key={index.toString()} word={elem} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default StatisticsTable;
