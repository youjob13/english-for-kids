import React, { ReactElement } from 'react';
import classes from './statistics.module.scss';
import StatisticsTable from './StatisticsTable/StatisticsTable';

const STATISTICS_HEADER_STYLES = classes.statisticsHeader;
const BUTTONS_WRAPPER_STYLES = classes.buttonsWrapper;
const BUTTON_STYLES = classes.button;
const TITLE_STYLES = classes.title; // TODO: move in separate component

const Statistics = (): ReactElement => {
  return (
    <>
      <div className={STATISTICS_HEADER_STYLES}>
        <h2 className={TITLE_STYLES}>Statistics</h2>
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
