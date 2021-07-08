import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import TableCell from './TableCell/TableCell';
import { IWordStatisticData } from '../../../shared/interfaces/api-models';
import {
  CardsReducerType,
  StatisticReducerType,
} from '../../../shared/interfaces/store-models';
import { ICardItem } from '../../../shared/interfaces/cards-models';
import TableHeader from './TableHeader/TableHeader';
import {
  TABLE_BODY_STYLES,
  TABLE_ROW_STYLES,
  TABLE_STYLES,
  TABLE_TITLE_STYLES,
} from '../../../shared/stylesVariables';
import tableHeaders from '../../../shared/globalVariables';
import sortTable from '../../../shared/helpersFunction/sortTable';
import calcPercentByCondition from '../../../shared/helpersFunction/calcPercentByCondition';

const StatisticsTable = (): ReactElement => {
  const { cards: cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { statisticsData } = useSelector(
    (state: StatisticReducerType) => state.statisticReducer
  );
  const [sortingType, setSortingType] = useState({
    sortBy: '',
    sortFromTop: false,
  });

  const statisticsParams: IWordStatisticData[] = cardsData
    .map((cardsDataItem) => {
      const category = Object.keys(cardsDataItem).toString();
      const cards: ICardItem[] = Object.values(cardsDataItem)[0];

      return cards.map((card) => {
        const parsedData =
          statisticsData[card.name] && JSON.parse(statisticsData[card.name]);
        return {
          wordName: card.name,
          translation: card.translate,
          train: (parsedData && parsedData.trainCounter) || 0,
          hit: (parsedData && parsedData.trueAnswerCounter) || 0,
          wrong: (parsedData && parsedData.falseAnswerCounter) || 0,
          correctAnswersPercent:
            (parsedData &&
              calcPercentByCondition(
                parsedData.falseAnswerCounter || 0,
                parsedData.trueAnswerCounter || 0
              )) ||
            0,
          category,
        };
      });
    })
    .flat();

  const selectSorting = (sortingTypeName: string) => {
    setSortingType({
      sortBy: sortingTypeName,
      sortFromTop: !sortingType.sortFromTop, // TODO: to do nice sort
    });
  };

  return (
    <table className={TABLE_STYLES}>
      <thead>
        <tr className={TABLE_ROW_STYLES}>
          <th className={TABLE_TITLE_STYLES}>№</th>
          {tableHeaders.map((tableHeaderContent) => (
            <TableHeader
              key={tableHeaderContent.type}
              selectedSortingType={sortingType.sortBy} // TODO: to do smth
              content={tableHeaderContent}
              selectSorting={selectSorting}
            />
          ))}
        </tr>
      </thead>
      <tbody className={TABLE_BODY_STYLES}>
        {sortTable(statisticsParams, sortingType).map((elem, index) => (
          <TableCell key={index.toString()} word={elem} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default StatisticsTable;
