import React, { ReactElement } from 'react';
import classes from '../../../statistics.module.scss';
import { ITableCellProps } from '../../../../../../shared/interfaces/props-models';

const TableCell = ({ number, word }: ITableCellProps): ReactElement => (
  <tr className={classes.tableRow}>
    <td className={classes.tableCell}>{number}</td>
    {Object.values(word).map((value, index, array) => (
      <td key={index.toString()} className={classes.tableCell}>
        {index === array.length - 1 ? `${value || 0}%` : `${value || 0}`}
      </td>
    ))}
  </tr>
);
export default TableCell;
