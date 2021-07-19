import React, { ReactElement, useState } from 'react';
import AddItem from '../../../../AddItem/AddItem';
import NewCategoryForm from './NewCategoryForm/NewCategoryForm';

const NewCategory = (): ReactElement => {
  const [isCreatingNewCategory, toggleCreatingCategoryMode] = useState(false);

  const flipCard = () => {
    toggleCreatingCategoryMode(!isCreatingNewCategory);
  };

  return (
    <>
      {isCreatingNewCategory ? (
        <NewCategoryForm flipCard={flipCard} />
      ) : (
        <AddItem addItem={flipCard} text="Create new Category" />
      )}
    </>
  );
};

export default NewCategory;
