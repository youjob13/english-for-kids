import React, { PropsWithChildren, ReactElement } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import classes from '../category.module.scss';
import { ElemRole } from '../../../../../../shared/globalVariables';
import { ICategoryFrontSideProps } from '../../../../../../shared/interfaces/props-models';

const CategoryFrontSide = ({
  toggleEditCategoryMode,
  categoryName,
  children,
}: PropsWithChildren<ICategoryFrontSideProps>): ReactElement => {
  const match = useRouteMatch();

  return (
    <>
      <h3 className={classes.cardTitle}>{categoryName}</h3>
      <>{children}</>
      <div className={classes.cardButtonsWrapper}>
        <button
          onClick={toggleEditCategoryMode}
          className={classes.cardButton}
          type={ElemRole.BUTTON}
        >
          Update
        </button>
        <Link
          to={`${match.url}/${categoryName}`}
          className={classes.cardButton}
          type={ElemRole.BUTTON}
        >
          Add word
        </Link>
      </div>
    </>
  );
};

export default CategoryFrontSide;
