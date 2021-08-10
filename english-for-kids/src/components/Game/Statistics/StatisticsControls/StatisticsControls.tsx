import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IStatisticsControlsProps } from '../../../../shared/interfaces/props-models';
import classes from './statisticsControls.module.scss';
import { ElemRole, Path, SECTION } from '../../../../shared/globalVariables';

const StatisticsControls = ({
  clearList,
}: IStatisticsControlsProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={classes.buttonsWrapper}>
      <Link
        className={classes.button}
        to={`/${SECTION}/${Path.DIFFICULT_WORDS}`}
        type={ElemRole.BUTTON}
      >
        {t('repeat_difficult_words')}
      </Link>
      {localStorage.token && (
        <button
          className={classes.button}
          type={ElemRole.BUTTON}
          onClick={clearList}
        >
          Clear list
        </button>
      )}
    </div>
  );
};

export default StatisticsControls;
