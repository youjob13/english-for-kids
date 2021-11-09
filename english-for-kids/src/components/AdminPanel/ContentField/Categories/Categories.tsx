import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../contentField.module.scss';
import Category from './Category/Category';
import NewCategory from './Category/NewCategory/NewCategory';
import { ICardsProps } from '../../../../shared/interfaces/props-models';
import usePaginate from '../../../../shared/hooks/usePaginate';
import { nullifyCards } from '../../../../store/wordsSlice';

const Categories = ({ cardsData }: ICardsProps): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nullifyCards());
  }, [dispatch]);

  const lastCategoryElem = usePaginate();

  return (
    <div className={classes.contentField}>
      {cardsData.map(({ category, words, _id }, index, categories) =>
        categories.length === index + 1 ? (
          <div key={index.toString()} ref={lastCategoryElem}>
            <Category
              key={_id}
              id={_id}
              category={category}
              cardsCount={words ? words.length : 0}
            />
          </div>
        ) : (
          <Category
            key={_id}
            id={_id}
            category={category}
            cardsCount={words ? words.length : 0}
          />
        )
      )}
      <NewCategory />
    </div>
  );
};

export default Categories;
