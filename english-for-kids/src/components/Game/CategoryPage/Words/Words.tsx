import React, { ReactElement } from 'react';
import Word from './Word/Word';
import { ICategoriesProps } from '../../../../shared/interfaces/props-models';
import classes from '../category.module.scss';
import EmptyCategory from '../../MainPage/EmptyCategory/EmptyCategory';

const Words = ({
  gameCards,
  currentQuestion,
}: ICategoriesProps): ReactElement => (
  <ul className={classes.categoryField}>
    {!gameCards.length ? (
      <EmptyCategory />
    ) : (
      gameCards.map((word) => (
        <Word key={word._id} word={word} currentQuestion={currentQuestion} />
      ))
    )}
  </ul>
);

export default Words;
