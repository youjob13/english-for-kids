import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import classes from './cardCategoryEdit.module.scss';
import capitalizeWord from '../../../../shared/helperFunctions/capitalizeWord';
import { removeCategory, updateCategory } from '../../../../store/cardsSlice';

const REMOVE_CATEGORY = classes.cardRemove;
const CATEGORY = classes.card;
const CATEGORY_TITLE = classes.cardTitle;
const CATEGORY_BUTTON = classes.cardButton;
const CATEGORY_BUTTONS_WRAPPER = classes.cardButtonsWrapper;

const CardCategoryEdit = ({ id, cardsCount, category }: any): ReactElement => {
  const dispatch = useDispatch();
  const [isCategoryNameUpdate, toggleUpdateCategoryNameMode] = useState(false);
  const [categoryName, setCategoryName] = useState(category);
  const match = useRouteMatch();

  const updateCategoryName = (event: FormEvent): void => {
    const target = event.target as HTMLInputElement;
    setCategoryName(target.value);
  };

  const turnOnUpdatedCategoryNameMode = (): void => {
    toggleUpdateCategoryNameMode(!isCategoryNameUpdate);
  };

  const createNewCategoryName = () => {
    const data = {
      prevCategoryName: category,
      newCategoryName: categoryName,
    };
    dispatch(updateCategory(data));
    turnOnUpdatedCategoryNameMode();
  };

  const removeSelectedCategory = () => {
    dispatch(removeCategory(id));
  };

  return (
    <div className={CATEGORY}>
      <div
        role="button"
        tabIndex={0}
        onKeyPress={() => console.log('Category deleted')}
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
              onClick={turnOnUpdatedCategoryNameMode}
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
              onClick={turnOnUpdatedCategoryNameMode}
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

export default CardCategoryEdit;
