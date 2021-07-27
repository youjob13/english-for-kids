import React, { PropsWithChildren, ReactElement } from 'react';
import classes from '../category.module.scss';
import { ElemRole, InputType } from '../../../../../../shared/globalVariables';
import { ICategoryEditModeProps } from '../../../../../../shared/interfaces/props-models';

const CategoryEditMode = ({
  updateCategoryName,
  categoryName,
  toggleEditCategoryMode,
  createNewCategory,
  children,
}: PropsWithChildren<ICategoryEditModeProps>): ReactElement => (
  <>
    <input
      onInput={updateCategoryName}
      type={InputType.TEXT}
      value={categoryName}
    />
    <>{children}</>
    <div className={classes.cardButtonsWrapper}>
      <button
        onClick={toggleEditCategoryMode}
        className={classes.cardButton}
        type={ElemRole.BUTTON}
      >
        Cancel
      </button>
      <button
        onClick={createNewCategory}
        className={classes.cardButton}
        type={ElemRole.BUTTON}
      >
        Create
      </button>
    </div>
  </>
);

export default CategoryEditMode;
