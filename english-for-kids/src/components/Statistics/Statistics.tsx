import React, { ReactElement } from 'react';
import StatisticsTable from './StatisticsTable/StatisticsTable';
import Title from '../../shared/baseComponents/Title/Title';
import {
  BUTTON_STYLES,
  BUTTONS_WRAPPER_STYLES,
  STATISTICS_HEADER_STYLES,
  TABLE_WRAPPER_STYLES,
} from '../../shared/stylesVariables';

const Statistics = (): ReactElement => {
  return (
    <>
      <div className={STATISTICS_HEADER_STYLES}>
        <Title>Statistics</Title>
        <div className={BUTTONS_WRAPPER_STYLES}>
          <button className={BUTTON_STYLES} type="button">
            Repeat difficult words
          </button>
          <button className={BUTTON_STYLES} type="button">
            Clear list
          </button>
        </div>
      </div>
      <div className={TABLE_WRAPPER_STYLES}>
        <StatisticsTable />
      </div>
    </>
  );
};

export default Statistics;
