import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { INewCategoryForm } from '../../../../../../../shared/interfaces/props-models';
import { createCategory } from '../../../../../../../store/cardsSlice';
import classes from '../../category.module.scss';
import { EMPTY_LINE } from '../../../../../../../shared/globalVariables';

const NewCategoryForm = ({ flipCard }: INewCategoryForm): ReactElement => {
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState(EMPTY_LINE);

  const changeCategoryName = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setCategoryName(target.value);
  };

  const onCreateNewCategoryClick = () => {
    flipCard();
    dispatch(createCategory(categoryName));
  };

  return (
    <form className={classes.card} onSubmit={onCreateNewCategoryClick}>
      <input
        className={classes.cardInput}
        onInput={changeCategoryName}
        type="text"
        value={categoryName}
      />
      <div className={classes.cardButtonsWrapper}>
        <button className={classes.cardButton} onClick={flipCard} type="button">
          Cancel
        </button>
        <button className={classes.cardButton} type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default NewCategoryForm;
