import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddItem from '../../AddItem/AddItem';
import CardForm from '../../CardForm/CardForm';
import { createCard } from '../../../../store/cardsSlice';
import checkFormFilling from '../../../../shared/helperFunctions/checkFormFilling';

const NewCard = ({ categoryId }: any): ReactElement => {
  const dispatch = useDispatch();
  const [isCreatingNewCard, toggleCreatingCardMode] = useState(false);
  const [isFormCompleted, toggleFormCompleted] = useState(false);
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
    if (isFormCompleted) return;

    const isFormFilling = checkFormFilling(formData);

    if (!isFormFilling) {
      toggleFormCompleted(true);
      setTimeout(() => {
        toggleFormCompleted(false);
      }, 2000);
      return;
    }

    flipCard();
    dispatch(createCard(formData, categoryId.toString()));
  };

  return (
    <>
      {isFormCompleted && <div>заполните форму полностью</div>}
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
