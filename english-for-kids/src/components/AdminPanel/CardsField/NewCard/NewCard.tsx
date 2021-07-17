import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddItem from '../../AddItem/AddItem';
import CardForm from '../../CardForm/CardForm';
import { createCard } from '../../../../store/cardsSlice';

const NewCard = ({ categoryId }: any): ReactElement => {
  const dispatch = useDispatch();
  const [isCreatingNewCard, toggleCreatingCardMode] = useState(false);
  const [updatedWordName, updateWordName] = useState('');
  const [updatedWordTranslation, updateWordTranslation] = useState('');

  const flipCard = () => {
    toggleCreatingCardMode(!isCreatingNewCard);
  };

  const typeNewWordName = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.name === 'wordName') {
      updateWordName(target.value);
    } else {
      updateWordTranslation(target.value);
    }
  };

  const onCreateCardClick = async (formData: FormData) => {
    dispatch(createCard(formData, categoryId.toString()));
  };

  return (
    <>
      {isCreatingNewCard ? (
        <CardForm
          submitForm={onCreateCardClick}
          updateInputValue={typeNewWordName}
          wordName={updatedWordName}
          translationName={updatedWordTranslation}
          closeForm={flipCard}
        />
      ) : (
        <AddItem addItem={flipCard} text="Create new Card" />
      )}
    </>
  );
};

export default NewCard;
