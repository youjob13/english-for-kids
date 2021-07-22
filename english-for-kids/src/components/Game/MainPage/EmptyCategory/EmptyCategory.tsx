import React, { ReactElement } from 'react';
import { CARD_STYLES } from '../../../../shared/stylesVariables';
import classes from './emptyCategory.module.scss';

const EMPTY_CATEGORY_TITLE = classes.emptyCategoryTitle;

const EmptyCategory = (): ReactElement => {
  return (
    <div className={CARD_STYLES}>
      <h3 className={EMPTY_CATEGORY_TITLE}>Category is empty</h3>
    </div>
  );
};

export default EmptyCategory;
