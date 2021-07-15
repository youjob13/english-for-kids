import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import classes from './card.module.scss';
import { ICardAdminFront } from '../../../../shared/interfaces/props-models';
import { removeCard } from '../../../../store/cardsSlice';

const CardFront = ({
  categoryId,
  id,
  name,
  translate,
  audioSRC,
  imageSRC,
  toggleEditMode,
}: ICardAdminFront): ReactElement => {
  const dispatch = useDispatch();
  const flipCardToBack = () => {
    toggleEditMode(true);
  };

  const onRemoveCardClick = () => {
    dispatch(removeCard(id, categoryId.toString()));
  };

  return (
    <div className={classes.cardAdminFront}>
      <span className={classes.cardAdminContent}>
        <h5>Word:</h5> <p>{name}</p>
      </span>
      <span className={classes.cardAdminContent}>
        <h5>Translation:</h5> <p>{translate}</p>
      </span>
      <span className={classes.cardAdminContent}>
        <h5>Sound file:</h5> <p>{audioSRC.match(/\w+.mp3$/)}</p>
      </span>
      <span className={classes.cardAdminContent}>
        <h5>Image:</h5>
        <div className={classes.cardAdminImage}>
          <img src={imageSRC} alt="" />
        </div>
      </span>
      <div className={classes.cardAdminButtons}>
        <button
          onClick={onRemoveCardClick}
          className={`${classes.cardAdminButton} ${classes.removeButton}`}
          type="button"
        >
          Remove
        </button>
        <button
          onClick={flipCardToBack}
          className={classes.cardAdminButton}
          type="button"
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default CardFront;
