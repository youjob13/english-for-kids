import React, { ReactElement, useState } from 'react';
import WordCardFront from './WordCardFront/WordCardFront';
import WordCardBack from './WordCardBack/WordCardBack';
import { ICardEditProps } from '../../../../../shared/interfaces/props-models';
import { booleanStateValueDefault } from '../../../../../shared/globalVariables';
import classes from './word.module.scss';

const Word = ({ categoryId, word }: ICardEditProps): ReactElement => {
  const [isEditMode, toggleEditMode] = useState(booleanStateValueDefault);

  return (
    <div className={classes.word}>
      {!isEditMode ? (
        <WordCardFront
          categoryId={categoryId}
          toggleEditMode={toggleEditMode}
          {...word}
        />
      ) : (
        <WordCardBack
          categoryId={categoryId}
          toggleEditMode={toggleEditMode}
          {...word}
        />
      )}
    </div>
  );
};

export default Word;
