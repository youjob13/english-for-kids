import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AddItem from '../../../../AddItem/AddItem';
import CardForm from '../WordCardBack/CardForm/CardForm';
import { createCard } from '../../../../../../store/cardsSlice';
import checkFormFilling from '../../../../../../shared/helperFunctions/checkFormFilling';
import classes from '../../cards.module.scss';
import { logoutUser } from '../../../../../../store/authSlice';

const NewCard = ({ categoryId }: any): ReactElement => {
  const history = useHistory();
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
    if (localStorage.token) {
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
    } else {
      history.push('main');
      dispatch(logoutUser());
    }
  };

  return (
    <>
      {isFormCompleted && (
        <div
          className={`${classes.cardFormMessage} ${classes.cardFormMessageError}`}
        >
          Заполните форму полностью
        </div>
      )}
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
