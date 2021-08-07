import React, { ReactElement } from 'react';
import classes from '../../statistics.module.scss';
import tableHeaders from '../../../../../shared/globalVariables';
import { ITableHeaderProps } from '../../../../../shared/interfaces/props-models';
import TableHeaderTitle from './TableHeaderTitle/TableHeaderTitle';

const TableHeader = ({
  selectSorting,
  sortingType,
}: ITableHeaderProps): ReactElement => (
  <thead>
    <tr className={classes.tableRow}>
      <th className={classes.tableTitle}>№</th>
      {tableHeaders.map((tableHeaderContent) => (
        <TableHeaderTitle
          key={tableHeaderContent.type}
          selectedSortingType={sortingType.sortBy}
          content={tableHeaderContent}
          selectSorting={selectSorting}
        />
      ))}
    </tr>
  </thead>
);

export default TableHeader;
