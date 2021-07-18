import React, { FormEvent, ReactElement, useRef } from 'react';
import classes from '../CardsField/Card/card.module.scss';
import { ICardForm } from '../../../shared/interfaces/props-models';

const CardForm = ({
  submitForm,
  updateInputValue,
  wordName,
  translationName,
  closeForm,
}: ICardForm): ReactElement => {
  const formRef = useRef(null);

  const submitForms = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(
      (formRef as React.MutableRefObject<any | null>).current
    );
    submitForm(formData);
  };

  return (
    <div className={classes.cardAdminBack}>
      <form ref={formRef} onSubmit={submitForms}>
        <label className={classes.cardAdminLabel} htmlFor="wordName">
          Word
          <input
            onInput={updateInputValue}
            name="wordName"
            id="wordName"
            type="text"
            value={wordName}
          />
        </label>
        <label className={classes.cardAdminLabel} htmlFor="wordTranslation">
          Translation
          <input
            name="wordTranslation"
            onInput={updateInputValue}
            id="wordTranslation"
            type="text"
            value={translationName}
          />
        </label>
        <strong>Sound:</strong>
        <input name="sound" type="file" accept="audio/*" />
        <strong>Image:</strong>
        <input name="image" type="file" accept="image/*" />
        <div className={classes.cardAdminButtons}>
          <button
            onClick={closeForm}
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

export default CardForm;
