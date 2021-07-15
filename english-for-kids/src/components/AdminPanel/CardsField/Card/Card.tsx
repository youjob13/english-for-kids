import React, { ReactElement, useState } from 'react';
import classes from './card.module.scss';
import { ICardItem } from '../../../../shared/interfaces/cards-models';
import CardFront from './CardFront';
import CardBack from './CardBack';

interface ICardEditProps {
  card: ICardItem;
}

const Card = ({ card }: ICardEditProps): ReactElement => {
  const [isEditMode, toggleEditMode] = useState(false);

  return (
    <div className={classes.cardAdmin}>
      {!isEditMode ? (
        <CardFront toggleEditMode={toggleEditMode} {...card} />
      ) : (
        <CardBack toggleEditMode={toggleEditMode} {...card} />
      )}
    </div>
  );
};

export default Card;
