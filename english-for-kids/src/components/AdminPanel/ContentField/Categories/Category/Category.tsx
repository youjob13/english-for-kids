import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import classes from './category.module.scss';
import capitalizeWord from '../../../../../shared/helperFunctions/capitalizeWord';
import {
  removeCategory,
  updateCategory,
} from '../../../../../store/cardsSlice';

const REMOVE_CATEGORY = classes.cardRemove;
export const CATEGORY = classes.card;
const CATEGORY_TITLE = classes.cardTitle;
export const CATEGORY_BUTTON = classes.cardButton;
export const CATEGORY_BUTTONS_WRAPPER = classes.cardButtonsWrapper;
export const CATEGORY_INPUT = classes.cardInput;

const Category = ({ id, cardsCount, category }: any): ReactElement => {
  const dispatch = useDispatch();
  const [isCategoryNameUpdate, toggleUpdateCategoryNameMode] = useState(false);
  const [categoryName, setCategoryName] = useState(category);
  const match = useRouteMatch();

  const updateCategoryName = (event: FormEvent): void => {
    const target = event.target as HTMLInputElement;
    setCategoryName(target.value);
  };

  const switchUpdatedCategoryNameMode = (): void => {
    toggleUpdateCategoryNameMode(!isCategoryNameUpdate);
  };

  const createNewCategoryName = () => {
    switchUpdatedCategoryNameMode();
    dispatch(updateCategory(id, categoryName));
  };

  const removeSelectedCategory = () => {
    dispatch(removeCategory(id));
  };

  return (
    <div className={CATEGORY}>
      <button
        type="button"
        onClick={removeSelectedCategory}
        className={REMOVE_CATEGORY}
      />
      {isCategoryNameUpdate ? (
        <input onInput={updateCategoryName} type="text" value={categoryName} />
      ) : (
        <h3 className={CATEGORY_TITLE}>{capitalizeWord(category)}</h3>
      )}
      <p>Words: {cardsCount}</p>
      <div className={CATEGORY_BUTTONS_WRAPPER}>
        {isCategoryNameUpdate ? (
          <>
            <button
              onClick={switchUpdatedCategoryNameMode}
              className={CATEGORY_BUTTON}
              type="button"
            >
              Cancel
            </button>
            <button
              onClick={createNewCategoryName}
              className={CATEGORY_BUTTON}
              type="button"
            >
              Create
            </button>
          </>
        ) : (
          <>
            <button
              onClick={switchUpdatedCategoryNameMode}
              className={CATEGORY_BUTTON}
              type="button"
            >
              Update
            </button>
            <Link
              to={`${match.url}/${category}`}
              className={CATEGORY_BUTTON}
              type="button"
            >
              Add word
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Category;
