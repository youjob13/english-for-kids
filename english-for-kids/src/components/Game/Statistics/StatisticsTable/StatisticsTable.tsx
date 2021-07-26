import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  CardsReducerType,
  StatisticReducerType,
} from '../../../../shared/interfaces/store-models';
import TableHeader from './TableHeader/TableHeader';
import {
  TABLE_BODY_STYLES,
  TABLE_ROW_STYLES,
  TABLE_STYLES,
  TABLE_TITLE_STYLES,
} from '../../../../shared/stylesVariables';
import tableHeaders from '../../../../shared/globalVariables';
import calcPercentByCondition from '../../../../shared/helperFunctions/calcPercentByCondition';
import TableCell from './TableCell/TableCell';
import sortTable from '../../../../shared/helperFunctions/sortTable';

const StatisticsTable = (): ReactElement => {
  const { cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { wordsStatistics } = useSelector(
    (state: StatisticReducerType) => state.statisticReducer
  );
  const [sortingType, setSortingType] = useState({
    sortBy: '',
    sortFromTop: false,
  });

  const statisticsParams = cardsData
    .map(({ category, cards }) => {
      return cards.map(({ name, translate }) => ({
        wordName: name,
        translation: translate,
        category,
      }));
    })
    .flat()
    .map((statistics, index) => ({
      ...statistics,
      hit: wordsStatistics[index].hit || 0,
      train: wordsStatistics[index].train || 0,
      wrong: wordsStatistics[index].wrong || 0,
      correctAnswersPercent: calcPercentByCondition(
        wordsStatistics[index].hit || 0,
        wordsStatistics[index].wrong || 0
      ),
    }));

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
