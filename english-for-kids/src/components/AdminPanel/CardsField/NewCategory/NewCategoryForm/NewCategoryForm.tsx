import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { INewCategoryForm } from '../../../../../shared/interfaces/props-models';
import { createCategory } from '../../../../../store/cardsSlice';

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
    <form onSubmit={onCreateNewCategoryClick}>
      <input onInput={changeCategoryName} type="text" value={categoryName} />
      <button onClick={flipCard} type="button">
        Cancel
      </button>
      <button type="submit">Create</button>
    </form>
  );
};

export default NewCategoryForm;
