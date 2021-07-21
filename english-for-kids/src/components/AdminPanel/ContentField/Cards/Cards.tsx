import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import capitalizeWord from '../../../../shared/helperFunctions/capitalizeWord';
import Card from './Card/Card';
import classes from './cards.module.scss';
import { RouteParams } from '../../../../shared/interfaces/api-models';
import NewCard from './Card/NewCard/NewCard';
import { ICardsProps } from '../../../../shared/interfaces/props-models';

const Cards = ({ cardsData }: ICardsProps): ReactElement => {
  const { category: categoryName } = useParams<RouteParams>();

  return (
    <>
      <h2>Category: {capitalizeWord(categoryName)}</h2>
      <>
        {cardsData.map(
          ({ cards, category, _id }) =>
            category === categoryName && (
              <div key={_id} className={classes.cards}>
                {cards.map((card) => (
                  <Card key={_id} categoryId={_id} card={card} />
                ))}
                <NewCard categoryId={_id} />
              </div>
            )
        )}
      </>
    </>
  );
};
export default Cards;
