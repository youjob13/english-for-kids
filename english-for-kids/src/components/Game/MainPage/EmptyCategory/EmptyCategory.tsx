import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './emptyCategory.module.scss';
import { LocalesKey } from '../../../../shared/globalVariables';

const EMPTY_CATEGORY_TITLE = classes.emptyCategoryTitle;

const EmptyCategory = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={classes.card}>
      <h3 className={EMPTY_CATEGORY_TITLE}>{t(LocalesKey.EMPTY_CATEGORY)}</h3>
    </div>
  );
};

export default EmptyCategory;
