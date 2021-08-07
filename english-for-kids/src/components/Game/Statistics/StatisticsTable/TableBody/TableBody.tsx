import React, { ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';
import classes from '../../statistics.module.scss';
import sortTable from '../../../../../shared/helperFunctions/sortTable';
import { ITableBodyProps } from '../../../../../shared/interfaces/props-models';
import {
  getStatisticsState,
  getWordsState,
} from '../../../../../store/selectors';
import getUnsortedStatistics from '../../../../../shared/helperFunctions/getUnsortedStatistics';
import TableCell from './TableCell/TableCell';

const TableBody = ({ sortingType }: ITableBodyProps): ReactElement => {
  const { cardsData } = useSelector(getWordsState);
  const { wordsStatistics } = useSelector(getStatisticsState);

  const unsortedStatistics = useMemo(
    () => getUnsortedStatistics(cardsData, wordsStatistics),
    [cardsData, wordsStatistics]
  );

  return (
    <tbody className={classes.tableBody}>
      {sortTable(unsortedStatistics, sortingType).map((word, index) => (
        <TableCell key={index.toString()} word={word} index={index + 1} />
      ))}
    </tbody>
  );
};

export default TableBody;
