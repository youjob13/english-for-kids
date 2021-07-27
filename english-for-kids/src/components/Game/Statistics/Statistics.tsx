import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import StatisticsTable from './StatisticsTable/StatisticsTable';
import Title from '../../../shared/baseComponents/Title/Title';
import {
  BUTTON_STYLES,
  BUTTONS_WRAPPER_STYLES,
  STATISTICS_HEADER_STYLES,
  TABLE_WRAPPER_STYLES,
} from '../../../shared/stylesVariables';
import { getStatistics, resetStatistics } from '../../../store/statisticSlice';

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
      <div className={STATISTICS_HEADER_STYLES}>
        <Title>Statistics</Title>
        <div className={BUTTONS_WRAPPER_STYLES}>
          <Link
            to="/section/difficult-words"
            className={BUTTON_STYLES}
            type="button"
          >
            Repeat difficult words
          </Link>
          <button onClick={clearList} className={BUTTON_STYLES} type="button">
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
