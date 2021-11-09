import React, { FormEvent, ReactElement, useRef } from 'react';
import classes from '../word.module.scss';
import { ICardForm } from '../../../../../../shared/interfaces/props-models';
import {
  ElemRole,
  InputAccept,
  InputName,
  InputType,
  WORD_NAME,
  WORD_TRANSLATION,
} from '../../../../../../shared/globalVariables';

const WordForm = ({
  submitForm,
  updateInputValue,
  wordData,
  closeForm,
}: ICardForm): ReactElement => {
  const formRef = useRef(null);

  const submitForms = (event: FormEvent) => {
    event.preventDefault();
    const formValue =
      formRef as unknown as React.MutableRefObject<HTMLFormElement>;

    const formData = new FormData(formValue.current);
    submitForm(formData);
  };

  return (
    <form ref={formRef} onSubmit={submitForms}>
      <label className={classes.wordLabel} htmlFor={WORD_NAME}>
        <strong>Word:</strong>
        <input
          onInput={updateInputValue}
          name={InputName.WORD_NAME}
          id={WORD_NAME}
          type={InputType.TEXT}
          value={wordData.name}
        />
      </label>
      <label className={classes.wordLabel} htmlFor={WORD_TRANSLATION}>
        <strong>Translation:</strong>
        <input
          name={InputName.WORD_TRANSLATION}
          onInput={updateInputValue}
          id={WORD_TRANSLATION}
          type={InputType.TEXT}
          value={wordData.translate}
        />
      </label>
      <strong>Sound:</strong>
      <input
        name={InputName.SOUND}
        type={InputType.FILE}
        accept={InputAccept.AUDIO}
      />
      <strong>Image:</strong>
      <input
        name={InputName.IMAGE}
        type={InputType.FILE}
        accept={InputAccept.IMAGE}
      />
      <div className={classes.wordButtons}>
        <button
          onClick={closeForm}
          className={classes.wordButton}
          type={ElemRole.BUTTON}
        >
          Cancel
        </button>
        <button className={classes.wordButton} type={ElemRole.SUBMIT}>
          Update
        </button>
      </div>
    </form>
  );
};

export default WordForm;
