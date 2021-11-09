import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import Word from './Word/Word';
import classes from './words.module.scss';
import { RouteParams } from '../../../../shared/interfaces/api-models';
import NewWord from './Word/NewWord/NewWord';
import { ICardsProps } from '../../../../shared/interfaces/props-models';
import Title from '../../../../shared/baseComponents/Title/Title';

const Words = ({ cardsData }: ICardsProps): ReactElement => {
  const { category: categoryName } = useParams<RouteParams>();

  return (
    <>
      <Title>Category: {categoryName}</Title>
      <>
        {cardsData.map(
          ({ words, category, _id }) =>
            category === categoryName && (
              <div key={_id} className={classes.cards}>
                {words.map((word) => (
                  <Word key={word._id} categoryId={_id} word={word} />
                ))}
                <NewWord categoryId={_id} />
              </div>
            )
        )}
      </>
    </>
  );
};
export default Words;
