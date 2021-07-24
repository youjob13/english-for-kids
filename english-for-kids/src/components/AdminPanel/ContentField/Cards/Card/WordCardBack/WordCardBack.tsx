import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ICardWithEditProps } from '../../../../../../shared/interfaces/props-models';
import { updateCard } from '../../../../../../store/cardsSlice';
import CardForm from './CardForm/CardForm';
import { logoutUser } from '../../../../../../store/authSlice';

const WordCardBack = ({
  categoryId,
  name,
  translate,
  toggleEditMode,
  _id,
}: ICardWithEditProps): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [updatedWordName, updateWordName] = useState(name);
  const [updatedWordTranslation, updateWordTranslation] = useState(translate);

  const flipCardToFront = () => {
    toggleEditMode(false);
  };

  const typeNewWordName = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.name === 'wordName') {
      updateWordName(target.value);
    } else {
      updateWordTranslation(target.value);
    }
  };

  const onUpdateCardClick = async (formData: any) => {
    if (localStorage.token) {
      toggleEditMode(false);
      dispatch(updateCard(_id, categoryId.toString(), formData));
    } else {
      history.push('main');
      dispatch(logoutUser());
    }
  };

  return (
    <CardForm
      submitForm={onUpdateCardClick}
      updateInputValue={typeNewWordName}
      wordName={updatedWordName}
      translationName={updatedWordTranslation}
      closeForm={flipCardToFront}
    />
  );
};

export default WordCardBack;
