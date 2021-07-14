import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './cardCategoryEdit.module.scss';
import capitalizeWord from '../../../../shared/helperFunctions/capitalizeWord';
import { updateCategory } from '../../../../store/cardsSlice';

const REMOVE_CATEGORY = classes.cardRemove;
const CATEGORY = classes.card;
const CATEGORY_TITLE = classes.cardTitle;
const CATEGORY_BUTTON = classes.cardButton;
const CATEGORY_BUTTONS_WRAPPER = classes.cardButtonsWrapper;

const CardCategoryEdit = ({ cardsCount, category }: any): ReactElement => {
  const dispatch = useDispatch();
  const [isCategoryNameUpdate, toggleUpdateCategoryNameMode] = useState(false);
  const [categoryName, setCategoryName] = useState(category);

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

  return (
    <div className={CATEGORY}>
      <div className={REMOVE_CATEGORY} />
      {isCategoryNameUpdate ? (
        <input onInput={updateCategoryName} type="text" value={categoryName} />
      ) : (
        <h3 className={CATEGORY_TITLE}>{capitalizeWord(category)}</h3>
      )}
      <p>Words: {cardsCount.length}</p>
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
            <button className={CATEGORY_BUTTON} type="button">
              Add word
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CardCategoryEdit;
