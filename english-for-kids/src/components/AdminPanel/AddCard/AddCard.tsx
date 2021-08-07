import React, { ReactElement } from 'react';
import { IAddItem } from '../../../shared/interfaces/props-models';
import classes from './newCard.module.scss';
import { ElemRole } from '../../../shared/globalVariables';

const AddCard = ({ text, addItem }: IAddItem): ReactElement => (
  <div className={classes.newCard}>
    <h3 className={classes.newCardTitle}>{text}</h3>
    <button
      onClick={addItem}
      className={classes.newCardButton}
      type={ElemRole.BUTTON}
    />
  </div>
);

export default AddCard;
