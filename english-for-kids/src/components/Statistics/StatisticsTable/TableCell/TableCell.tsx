import React, { ReactElement } from 'react';
import classes from '../../statistics.module.scss';
import capitalizeWord from '../../../../shared/helpersFunction/capitalizeWord';
import { ITableCellProps } from '../../../../shared/interfaces/props-models';

const TABLE_CELL_STYLES = classes.tableCell;
const TABLE_ROW_STYLES = classes.tableRow;

const TableCell = ({ index, word }: ITableCellProps): ReactElement => {
  const {
    category,
    wordName,
    translation,
    train,
    hit,
    wrong,
    correctAnswersPercent,
  } = word;

  return (
    <tr className={TABLE_ROW_STYLES}>
      <td className={TABLE_CELL_STYLES}>{index}</td>
      <td className={TABLE_CELL_STYLES}>{capitalizeWord(category)}</td>
      <td className={TABLE_CELL_STYLES}>{capitalizeWord(wordName)}</td>
      <td className={TABLE_CELL_STYLES}>{capitalizeWord(translation)}</td>
      <td className={TABLE_CELL_STYLES}>{train || 0}</td>
      <td className={TABLE_CELL_STYLES}>{hit || 0}</td>
      <td className={TABLE_CELL_STYLES}>{wrong || 0}</td>
      <td className={TABLE_CELL_STYLES}>{correctAnswersPercent || 0}%</td>
    </tr>
  );
};

export default TableCell;
