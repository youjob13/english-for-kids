import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import capitalizeWord from '../../../../shared/helperFunctions/capitalizeWord';
import Card from '../Card/Card';
import classes from './cards.module.scss';
import { RouteParams } from '../../../../shared/interfaces/api-models';
import { ICardsData } from '../../../../shared/interfaces/cards-models';
import NewCard from '../NewCard/NewCard';

interface ICardsProps {
  cardsData: ICardsData[];
}
const Cards = ({ cardsData }: ICardsProps): ReactElement => {
  const { category: categoryName } = useParams<RouteParams>();

  return (
    <>
      <h2>Category: {capitalizeWord(categoryName)}</h2>
      <div className={classes.cards}>
        {cardsData.map(
          ({ cards, category, id }) =>
            category === categoryName && (
              <>
                {cards.map((card) => (
                  <Card categoryId={id} card={card} />
                ))}
                <NewCard categoryId={id} />
              </>
            )
        )}
      </div>
    </>
  );
};
export default Cards;
