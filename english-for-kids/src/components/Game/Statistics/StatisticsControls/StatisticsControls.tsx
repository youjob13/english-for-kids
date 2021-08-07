import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { IStatisticsControlsProps } from '../../../../shared/interfaces/props-models';
import classes from '../statistics.module.scss';
import { ElemRole, Path } from '../../../../shared/globalVariables';

const StatisticsControls = ({
  clearList,
}: IStatisticsControlsProps): ReactElement => (
  <div className={classes.buttonsWrapper}>
    <Link
      className={classes.button}
      to={Path.DIFFICULT_WORDS}
      type={ElemRole.BUTTON}
    >
      Repeat difficult words
    </Link>
    <button
      className={classes.button}
      type={ElemRole.BUTTON}
      onClick={clearList}
    >
      Clear list
    </button>
  </div>
);

export default StatisticsControls;
