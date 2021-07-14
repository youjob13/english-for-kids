import React, { ReactElement } from 'react';
import {
  NEW_CARD,
  NEW_CARD_BUTTON,
  NEW_CARD_TITLE,
} from '../../../shared/stylesVariables';

const NewCard = ({ text }: any): ReactElement => {
  return (
    <div className={NEW_CARD}>
      <h3 className={NEW_CARD_TITLE}>{text}</h3>
      <button className={NEW_CARD_BUTTON} type="button" />
    </div>
  );
};

export default NewCard;
