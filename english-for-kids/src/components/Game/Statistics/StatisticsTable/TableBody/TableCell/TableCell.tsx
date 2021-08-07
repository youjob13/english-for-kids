import React, { ReactElement } from 'react';
import classes from '../../../statistics.module.scss';
import { ITableCellProps } from '../../../../../../shared/interfaces/props-models';

const TableCell = ({
  index,
  word: {
    category,
    wordName,
    translation,
    train,
    hit,
    wrong,
    correctAnswersPercent,
  },
}: ITableCellProps): ReactElement => (
  <tr className={classes.tableRow}>
    <td className={classes.tableCell}>{index}</td>
    <td className={classes.tableCell}>{category}</td>
    <td className={classes.tableCell}>{wordName}</td>
    <td className={classes.tableCell}>{translation}</td>
    <td className={classes.tableCell}>{train || 0}</td>
    <td className={classes.tableCell}>{hit || 0}</td>
    <td className={classes.tableCell}>{wrong || 0}</td>
    <td className={classes.tableCell}>{correctAnswersPercent || 0}%</td>
  </tr>
);

export default TableCell;
