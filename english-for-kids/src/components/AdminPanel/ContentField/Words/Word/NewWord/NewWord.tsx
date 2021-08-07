import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AddCard from '../../../../AddCard/AddCard';
import CardForm from '../WordCardBack/CardForm/CardForm';
import { createWord } from '../../../../../../store/cardsSlice';
import checkFormFilling from '../../../../../../shared/helperFunctions/checkFormFilling';
import { logoutUser } from '../../../../../../store/authSlice';
import { INewWordProps } from '../../../../../../shared/interfaces/props-models';
import {
  AddCardText,
  booleanStateValueDefault,
  Path,
  TWO_SECOND_DELAY,
  wordDataInitialState,
} from '../../../../../../shared/globalVariables';
import typeNewWordData from '../../../../../../shared/helperFunctions/updateFormValue';
import FormError from '../../../../../Popup/FormError/FormError';
import classes from '../card.module.scss';

const NewWord = ({ categoryId }: INewWordProps): ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isCreatingWordMode, toggleCreatingWordMode] = useState(
    booleanStateValueDefault
  );
  const [isFormNotFullyCompleted, toggleFormNotFullyCompleted] = useState(
    booleanStateValueDefault
  );
  const [wordData, updateWordData] = useState(wordDataInitialState);

  const flipCard = () => {
    toggleCreatingWordMode(!isCreatingWordMode);
  };

  const updateFormValue = (event: FormEvent) => {
    typeNewWordData(event, updateWordData);
  };

  const onCreateCardClick = async (formData: FormData) => {
    if (!localStorage.token) {
      history.push(Path.ROOT);
      dispatch(logoutUser());
      return;
    }

    if (isFormNotFullyCompleted) return;

    const isFormFilling = checkFormFilling(formData);

    if (!isFormFilling) {
      toggleFormNotFullyCompleted(true);
      setTimeout(() => {
        toggleFormNotFullyCompleted(false);
      }, TWO_SECOND_DELAY);
      return;
    }

    flipCard();
    dispatch(createWord(formData, categoryId));
  };

  return (
    <>
      {isFormNotFullyCompleted && <FormError />}
      {isCreatingWordMode ? (
        <div className={classes.cardAdmin}>
          <CardForm
            submitForm={onCreateCardClick}
            updateInputValue={updateFormValue}
            wordData={wordData}
            closeForm={flipCard}
          />
        </div>
      ) : (
        <AddCard addItem={flipCard} text={AddCardText.WORD} />
      )}
    </>
  );
};

export default NewWord;
