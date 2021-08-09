import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './emptyCategory.module.scss';

const EMPTY_CATEGORY_TITLE = classes.emptyCategoryTitle;

const EmptyCategory = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <div className={classes.card}>
      <h3 className={EMPTY_CATEGORY_TITLE}>{t('category_empty')}</h3>
    </div>
  );
};

export default EmptyCategory;
