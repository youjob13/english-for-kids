import React, { ReactElement } from 'react';
import classes from '../contentField.module.scss';
import Category from './Category/Category';
import NewCategory from './Category/NewCategory/NewCategory';
import { ICardsProps } from '../../../../shared/interfaces/props-models';

const CONTENT_FIELD = classes.contentField;

const Categories = ({ cardsData }: ICardsProps): ReactElement => {
  return (
    <div className={CONTENT_FIELD}>
      {cardsData.map(({ category, cards, _id }) => (
        <Category
          key={_id}
          id={_id}
          category={category}
          cardsCount={cards ? cards.length : 0}
        />
      ))}
      <NewCategory />
    </div>
  );
};

export default Categories;
