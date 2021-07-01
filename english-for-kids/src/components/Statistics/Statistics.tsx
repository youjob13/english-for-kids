import React, { ReactElement } from 'react';
import classes from './statistics.module.scss';
import StatisticsTable from './StatisticsTable/StatisticsTable';
import Title from '../../shared/baseComponents/Title/Title';

const STATISTICS_HEADER_STYLES = classes.statisticsHeader;
const BUTTONS_WRAPPER_STYLES = classes.buttonsWrapper;
const BUTTON_STYLES = classes.button;

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
      <StatisticsTable />
    </>
  );
};

export default Statistics;
