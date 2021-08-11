import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { INewCategoryForm } from '../../../../../../../shared/interfaces/props-models';
import { createCategory } from '../../../../../../../store/wordsSlice';
import classes from '../../category.module.scss';
import {
  ElemRole,
  EMPTY_LINE,
  InputType,
} from '../../../../../../../shared/globalVariables';

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
      <h2 className={classes.cardTitle}>Write category name</h2>
      <input
        className={classes.cardInput}
        onInput={changeCategoryName}
        type={InputType.TEXT}
        autoFocus
        value={categoryName}
      />
      <div className={classes.cardButtonsWrapper}>
        <button
          className={classes.cardButton}
          onClick={flipCard}
          type={ElemRole.BUTTON}
        >
          Cancel
        </button>
        <button className={classes.cardButton} type={ElemRole.SUBMIT}>
          Create
        </button>
      </div>
    </form>
  );
};

export default NewCategoryForm;
