import React, { ReactElement } from 'react';
import {
  NEW_CARD,
  NEW_CARD_BUTTON,
  NEW_CARD_TITLE,
} from '../../../shared/stylesVariables';
import { IAddItem } from '../../../shared/interfaces/props-models';

const AddCard = ({ text, addItem }: IAddItem): ReactElement => (
  <div className={NEW_CARD}>
    <h3 className={NEW_CARD_TITLE}>{text}</h3>
    <button onClick={addItem} className={NEW_CARD_BUTTON} type="button" />
  </div>
);

export default AddCard;
