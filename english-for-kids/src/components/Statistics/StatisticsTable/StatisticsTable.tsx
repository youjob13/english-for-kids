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
import capitalizeWord from '../../../shared/helpersFunction/capitalizeWord';

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
    case SortingTypes.ASKED: {
      return unsortedList.sort((a, b) =>
        sortBy.sortToTop ? a.asked - b.asked : b.asked - a.asked
      );
    }
    case SortingTypes.TRAIN: {
      return unsortedList.sort((a, b) =>
        sortBy.sortToTop ? a.train - b.train : b.train - a.train
      );
    }
    case SortingTypes.HIT: {
      return unsortedList.sort((a, b) =>
        sortBy.sortToTop ? a.hit - b.hit : b.hit - a.hit
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

const calcWrongPercent = (
  askedAnswers: number,
  trueAnswers: number
): number => {
  return Math.floor((askedAnswers * 100) / trueAnswers);
};

const StatisticsTable = (): ReactElement => {
  const { cards: cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );

  const items = { ...localStorage };

  const statisticsParams: IWordStatisticData[] = cardsData
    .map((cardsDataItem) => {
      const category = Object.keys(cardsDataItem).toString();
      const cards: ICardItem[] = Object.values(cardsDataItem)[0];
      return cards.map((card) => {
        return {
          wordName: card.name,
          translation: card.translate,
          asked:
            (items[capitalizeWord(card.name)] &&
              JSON.parse(items[capitalizeWord(card.name)]).askedCounter) ||
            0,
          train:
            (items[capitalizeWord(card.name)] &&
              JSON.parse(items[capitalizeWord(card.name)]).trainCounter) ||
            0,
          hit:
            (items[capitalizeWord(card.name)] &&
              JSON.parse(items[capitalizeWord(card.name)]).trueAnswerCounter) ||
            0,
          wrong:
            (items[capitalizeWord(card.name)] &&
              JSON.parse(items[capitalizeWord(card.name)])
                .falseAnswerCounter) ||
            0,
          wrongPercent:
            (items[capitalizeWord(card.name)] &&
              calcWrongPercent(
                JSON.parse(items[capitalizeWord(card.name)]).askedAnswerCounter,
                JSON.parse(items[capitalizeWord(card.name)]).trueAnswerCounter
              )) ||
            0,
          category,
        };
      });
    })
    .flat();

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
                sortBy: SortingTypes.ASKED,
                sortToTop: !sortingType.sortToTop,
              })
            }
            className={
              sortingType.sortBy === SortingTypes.ASKED
                ? TABLE_TITLE_ACTIVE_STYLES
                : TABLE_TITLE_STYLES
            }
          >
            Asked
          </th>
          <th
            onClick={() =>
              setSortingType({
                sortBy: SortingTypes.TRAIN,
                sortToTop: !sortingType.sortToTop,
              })
            }
            className={
              sortingType.sortBy === SortingTypes.TRAIN
                ? TABLE_TITLE_ACTIVE_STYLES
                : TABLE_TITLE_STYLES
            }
          >
            Train
          </th>
          <th
            onClick={() =>
              setSortingType({
                sortBy: SortingTypes.HIT,
                sortToTop: !sortingType.sortToTop,
              })
            }
            className={
              sortingType.sortBy === SortingTypes.HIT
                ? TABLE_TITLE_ACTIVE_STYLES
                : TABLE_TITLE_STYLES
            }
          >
            Hit
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
        {sortList(statisticsParams, sortingType).map((elem, index) => (
          <TableCell key={index.toString()} word={elem} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default StatisticsTable;
