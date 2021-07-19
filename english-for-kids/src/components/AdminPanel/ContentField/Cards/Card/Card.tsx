import React, { ReactElement, useState } from 'react';
import classes from './card.module.scss';
import { ICardItem } from '../../../../../shared/interfaces/cards-models';
import WordCardFront from './WordCardFront/WordCardFront';
import WordCardBack from './WordCardBack/WordCardBack';

interface ICardEditProps {
  card: ICardItem;
  categoryId: number;
}
const Card = ({ categoryId, card }: ICardEditProps): ReactElement => {
  const [isEditMode, toggleEditMode] = useState(false);

  return (
    <div className={classes.cardAdmin}>
      {!isEditMode ? (
        <WordCardFront
          categoryId={categoryId}
          toggleEditMode={toggleEditMode}
          {...card}
        />
      ) : (
        <WordCardBack
          categoryId={categoryId}
          toggleEditMode={toggleEditMode}
          {...card}
        />
      )}
    </div>
  );
};

export default Card;
