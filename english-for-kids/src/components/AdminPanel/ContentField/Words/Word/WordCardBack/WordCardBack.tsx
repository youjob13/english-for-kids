import React, { FormEvent, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ICardWithEditProps } from '../../../../../../shared/interfaces/props-models';
import { updateWord } from '../../../../../../store/wordsSlice';
import WordForm from '../WordForm/WordForm';
import { logoutUser } from '../../../../../../store/authSlice';
import { Path } from '../../../../../../shared/globalVariables';
import typeNewWordData from '../../../../../../shared/helperFunctions/updateFormValue';

const WordCardBack = ({
  categoryId,
  name,
  translate,
  toggleEditMode,
  _id,
}: ICardWithEditProps): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [wordData, updateWordData] = useState({ name, translate });

  const flipCardToFront = () => {
    toggleEditMode(false);
  };

  const updateFormValue = (event: FormEvent) => {
    typeNewWordData(event, updateWordData);
  };

  const onUpdateCardClick = async (formData: FormData) => {
    if (localStorage.token) {
      toggleEditMode(false);
      dispatch(updateWord(_id, categoryId, formData));
    } else {
      history.push(Path.ROOT);
      dispatch(logoutUser());
    }
  };

  return (
    <WordForm
      submitForm={onUpdateCardClick}
      updateInputValue={updateFormValue}
      wordData={wordData}
      closeForm={flipCardToFront}
    />
  );
};

export default WordCardBack;
