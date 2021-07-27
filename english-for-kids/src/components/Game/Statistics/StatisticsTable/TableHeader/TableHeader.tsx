import React, { ReactElement } from 'react';
import {
  TABLE_TITLE_ACTIVE_STYLES,
  TABLE_TITLE_STYLES,
} from '../../../../../shared/stylesVariables';
import { ITableHeader } from '../../../../../shared/interfaces/api-models';

const TableHeader = ({
  content,
  selectSorting,
  selectedSortingType,
}: ITableHeader): ReactElement => {
  const onTableHeaderClick = () => {
    selectSorting(content.type);
  };

  return (
    <th
      className={
        selectedSortingType === content.type
          ? TABLE_TITLE_ACTIVE_STYLES
          : TABLE_TITLE_STYLES
      }
      onClick={onTableHeaderClick}
    >
      {content.name}
    </th>
  );
};

export default TableHeader;
