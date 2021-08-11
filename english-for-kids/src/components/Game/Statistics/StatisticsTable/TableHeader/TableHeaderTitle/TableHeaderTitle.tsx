import React, { ReactElement } from 'react';
import { ITableHeaderTitleProps } from '../../../../../../shared/interfaces/api-models';
import classesStatistics from '../../statisticsTable.module.scss';

const TableHeaderTitle = ({
  content: { name, type },
  selectSorting,
  selectedSortingType,
}: ITableHeaderTitleProps): ReactElement => {
  const selectSortingType = () => {
    selectSorting(type);
  };

  const TABLE_HEADER =
    selectedSortingType === type
      ? `${classesStatistics.tableTitle} ${classesStatistics.tableTitleActive}`
      : classesStatistics.tableTitle;

  return (
    <th className={TABLE_HEADER} onClick={selectSortingType}>
      {name}
    </th>
  );
};

export default TableHeaderTitle;
