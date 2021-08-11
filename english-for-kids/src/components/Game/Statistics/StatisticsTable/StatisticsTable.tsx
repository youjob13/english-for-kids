import React, { ReactElement, useState } from 'react';
import TableHeader from './TableHeader/TableHeader';
import {
  booleanStateValueDefault,
  EMPTY_LINE,
} from '../../../../shared/globalVariables';
import classes from './statisticsTable.module.scss';
import TableBody from './TableBody/TableBody';

const StatisticsTable = (): ReactElement => {
  const [sortingType, setSortingType] = useState({
    sortBy: EMPTY_LINE,
    sortFromTop: booleanStateValueDefault,
  });

  const selectSorting = (sortingTypeName: string): void => {
    setSortingType({
      sortBy: sortingTypeName,
      sortFromTop: !sortingType.sortFromTop,
    });
  };

  return (
    <table className={classes.table}>
      <TableHeader selectSorting={selectSorting} sortingType={sortingType} />
      <TableBody sortingType={sortingType} />
    </table>
  );
};

export default StatisticsTable;
