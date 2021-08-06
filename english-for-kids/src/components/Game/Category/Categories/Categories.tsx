import React, { ReactElement } from 'react';
import CardWrapperInGame from './CardGame/CardWrapperInGame';
import { ICategoriesProps } from '../../../../shared/interfaces/props-models';
import classes from '../category.module.scss';

const Categories = ({
  gameCards,
  currentQuestion,
}: ICategoriesProps): ReactElement => (
  <ul className={classes.categoryField}>
    {!gameCards.length ? (
      <div>Category is empty</div>
    ) : (
      gameCards.map((word, index) => (
        <CardWrapperInGame
          key={index.toString()}
          word={word}
          currentQuestion={currentQuestion}
        />
      ))
    )}
  </ul>
);

export default Categories;
