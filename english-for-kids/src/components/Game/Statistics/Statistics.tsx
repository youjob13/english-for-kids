import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StatisticsTable from './StatisticsTable/StatisticsTable';
import Title from '../../../shared/baseComponents/Title/Title';
import { getStatistics, resetStatistics } from '../../../store/statisticSlice';
import StatisticsControls from './StatisticsControls/StatisticsControls';
import classes from './statistics.module.scss';

const Statistics = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  const clearList = () => {
    dispatch(resetStatistics());
  };

  return (
    <>
      <div className={classes.statisticsHeader}>
        <Title>Statistics</Title>
        <StatisticsControls clearList={clearList} />
      </div>
      <div className={classes.tableWrapper}>
        <StatisticsTable />
      </div>
    </>
  );
};

export default Statistics;
