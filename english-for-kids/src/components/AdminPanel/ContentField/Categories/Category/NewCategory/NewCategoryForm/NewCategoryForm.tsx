import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { INewCategoryForm } from '../../../../../../../shared/interfaces/props-models';
import { createCategory } from '../../../../../../../store/cardsSlice';
import {
  CATEGORY,
  CATEGORY_BUTTON,
  CATEGORY_BUTTONS_WRAPPER,
  CATEGORY_INPUT,
} from '../../Category';

const NewCategoryForm = ({ flipCard }: INewCategoryForm): ReactElement => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('');

  const changeCategoryName = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setCategoryName(target.value);
  };

  const onCreateNewCategoryClick = () => {
    flipCard();
    dispatch(createCategory(categoryName));
  };

  return (
    <form className={CATEGORY} onSubmit={onCreateNewCategoryClick}>
      <input
        className={CATEGORY_INPUT}
        onInput={changeCategoryName}
        type="text"
        value={categoryName}
      />
      <div className={CATEGORY_BUTTONS_WRAPPER}>
        <button className={CATEGORY_BUTTON} onClick={flipCard} type="button">
          Cancel
        </button>
        <button className={CATEGORY_BUTTON} type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default NewCategoryForm;
