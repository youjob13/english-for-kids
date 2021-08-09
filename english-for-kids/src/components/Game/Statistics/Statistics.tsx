import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import StatisticsTable from './StatisticsTable/StatisticsTable';
import Title from '../../../shared/baseComponents/Title/Title';
import { getStatistics, resetStatistics } from '../../../store/statisticSlice';
import StatisticsControls from './StatisticsControls/StatisticsControls';
import classes from './statistics.module.scss';

const Statistics = (): ReactElement => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  const clearList = () => {
    dispatch(resetStatistics());
  };

  return (
    <>
      <div className={classes.statisticsHeader}>
        <Title>{t('statistics')}</Title>
        <StatisticsControls clearList={clearList} />
      </div>
      <div className={classes.tableWrapper}>
        <StatisticsTable />
      </div>
    </>
  );
};

export default Statistics;
