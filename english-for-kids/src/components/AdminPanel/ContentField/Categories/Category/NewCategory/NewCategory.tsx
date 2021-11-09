import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddCard from '../../../../AddCard/AddCard';
import NewCategoryForm from './NewCategoryForm/NewCategoryForm';
import { logoutUser } from '../../../../../../store/authSlice';
import {
  booleanStateValueDefault,
  NewCategoryText,
  Path,
} from '../../../../../../shared/globalVariables';

const NewCategory = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isCreatingNewCategory, toggleCreatingCategoryMode] = useState(
    booleanStateValueDefault
  );

  const flipCard = () => {
    if (localStorage.token) {
      toggleCreatingCategoryMode(!isCreatingNewCategory);
    } else {
      history.push(Path.ROOT);
      dispatch(logoutUser());
    }
  };

  return (
    <>
      {isCreatingNewCategory ? (
        <NewCategoryForm flipCard={flipCard} />
      ) : (
        <AddCard addItem={flipCard} text={NewCategoryText} />
      )}
    </>
  );
};

export default NewCategory;
