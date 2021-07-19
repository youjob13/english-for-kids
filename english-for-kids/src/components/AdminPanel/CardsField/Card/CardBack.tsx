import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ICardWithEditProps } from '../../../../shared/interfaces/props-models';
import { updateCard } from '../../../../store/cardsSlice';
import CardForm from '../../CardForm/CardForm';

const CardBack = ({
  categoryId,
  name,
  translate,
  toggleEditMode,
  _id,
}: ICardWithEditProps): ReactElement => {
  const dispatch = useDispatch();
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
    toggleEditMode(false);
    dispatch(updateCard(_id, categoryId.toString(), formData));
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

export default CardBack;
