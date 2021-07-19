import React, { ReactElement, useState } from 'react';
import classes from './card.module.scss';
import { ICardItem } from '../../../../shared/interfaces/cards-models';
import CardFront from './CardFront';
import CardBack from './CardBack';

interface ICardEditProps {
  card: ICardItem;
  categoryId: number;
}
const Card = ({ categoryId, card }: ICardEditProps): ReactElement => {
  const [isEditMode, toggleEditMode] = useState(false);

  return (
    <div className={classes.cardAdmin}>
      {!isEditMode ? (
        <CardFront
          categoryId={categoryId}
          toggleEditMode={toggleEditMode}
          {...card}
        />
      ) : (
        <CardBack
          categoryId={categoryId}
          toggleEditMode={toggleEditMode}
          {...card}
        />
      )}
    </div>
  );
};

export default Card;
