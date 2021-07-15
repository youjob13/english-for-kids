import React, { FormEvent, ReactElement, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './card.module.scss';
import { ICardWithEditProps } from '../../../../shared/interfaces/props-models';
import { updateCard } from '../../../../store/cardsSlice';

const CardBack = ({
  categoryId,
  name,
  translate,
  toggleEditMode,
  id,
}: ICardWithEditProps): ReactElement => {
  const dispatch = useDispatch();
  const [updatedWordName, updateWordName] = useState(name);
  const [updatedWordTranslation, updateWordTranslation] = useState(translate);

  const formRef = useRef(null);

  const flipCardToFront = () => {
    toggleEditMode(false);
  };
  const typeNewWordName = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    updateWordName(target.value);
  };

  const typeNewWordTranslation = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    updateWordTranslation(target.value);
  };

  const onUpdateCardClick = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData((formRef as any).current);
    // await fetch('http://localhost:5000/cards', {
    //   method: 'PUT',
    //   headers: {
    //     Category: categoryId.toString(),
    //     Card: id,
    //   },
    //   body:,
    // });

    dispatch(updateCard(id, categoryId.toString(), formData));
  };

  return (
    <div className={classes.cardAdminBack}>
      <form ref={formRef} onSubmit={onUpdateCardClick}>
        <label className={classes.cardAdminLabel} htmlFor="wordName">
          Word
          <input
            onInput={typeNewWordName}
            name="wordName"
            id="wordName"
            type="text"
            value={updatedWordName}
          />
        </label>
        <label className={classes.cardAdminLabel} htmlFor="wordTranslation">
          Translation
          <input
            name="wordTranslation"
            onInput={typeNewWordTranslation}
            id="wordTranslation"
            type="text"
            value={updatedWordTranslation}
          />
        </label>
        <strong>Sound:</strong>
        <input name="sound" type="file" />
        <strong>Image:</strong> <input name="image" type="file" />
        <div className={classes.cardAdminButtons}>
          <button
            onClick={flipCardToFront}
            className={classes.cardAdminButton}
            type="button"
          >
            Cancel
          </button>
          <button className={classes.cardAdminButton} type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardBack;
