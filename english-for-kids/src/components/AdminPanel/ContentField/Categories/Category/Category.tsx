import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classes from './category.module.scss';
import {
  removeCategory,
  updateCategory,
} from '../../../../../store/cardsSlice';
import { logoutUser } from '../../../../../store/authSlice';
import {
  booleanStateValueDefault,
  ElemRole,
  Path,
} from '../../../../../shared/globalVariables';
import { IAdminCategoryProps } from '../../../../../shared/interfaces/props-models';
import CategoryEditMode from './CategoryEditMode/CategoryEditMode';
import CategoryFrontSide from './CategoryFrontSide/CategoryFrontSide';

const Category = ({
  id,
  cardsCount,
  category,
}: IAdminCategoryProps): ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isCategoryNameUpdate, toggleUpdateCategoryNameMode] = useState(
    booleanStateValueDefault
  );
  const [categoryName, setCategoryName] = useState(category);
  const updateCategoryName = (event: FormEvent): void => {
    const target = event.target as HTMLInputElement;
    setCategoryName(target.value);
  };

  const toggleEditCategoryMode = (): void => {
    toggleUpdateCategoryNameMode(!isCategoryNameUpdate);
  };

  const createNewCategory = () => {
    if (localStorage.token) {
      toggleEditCategoryMode();
      dispatch(updateCategory(id, categoryName));
    } else {
      history.push(Path.ROOT);
      dispatch(logoutUser());
    }
  };

  const removeSelectedCategory = () => {
    if (localStorage.token) {
      dispatch(removeCategory(id));
    } else {
      history.push(Path.ROOT);
      dispatch(logoutUser());
    }
  };

  return (
    <div className={classes.card}>
      <button
        type={ElemRole.BUTTON}
        onClick={removeSelectedCategory}
        className={classes.cardRemove}
      />
      {!isCategoryNameUpdate ? (
        <CategoryFrontSide
          categoryName={categoryName}
          toggleEditCategoryMode={toggleEditCategoryMode}
        >
          <p>Words: {cardsCount}</p>
        </CategoryFrontSide>
      ) : (
        <CategoryEditMode
          updateCategoryName={updateCategoryName}
          categoryName={categoryName}
          createNewCategory={createNewCategory}
          toggleEditCategoryMode={toggleEditCategoryMode}
        >
          <p>Words: {cardsCount}</p>
        </CategoryEditMode>
      )}
    </div>
  );
};

export default Category;
