import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../contentField.module.scss';
import Category from './Category/Category';
import NewCategory from './Category/NewCategory/NewCategory';
import { ICardsProps } from '../../../../shared/interfaces/props-models';
import usePaginate from '../../../../shared/hooks/usePaginate';
import { nullifyCards } from '../../../../store/cardsSlice';

const CONTENT_FIELD = classes.contentField;

const Categories = ({ cardsData }: ICardsProps): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nullifyCards());
  }, []);

  const lastCategoryElem = usePaginate();

  return (
    <div className={CONTENT_FIELD}>
      {cardsData.map(({ category, cards, _id }, index, categories) =>
        categories.length === index + 1 ? (
          <div key={index.toString()} ref={lastCategoryElem}>
            <Category
              key={(index + 1000).toString()}
              id={_id}
              category={category}
              cardsCount={cards ? cards.length : 0}
            />
          </div>
        ) : (
          <Category
            key={index.toString()}
            id={_id}
            category={category}
            cardsCount={cards ? cards.length : 0}
          />
        )
      )}
      <NewCategory />
    </div>
  );
};

export default Categories;
