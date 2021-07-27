import React, { ReactElement } from 'react';
import classes from '../../AdminPanel/ContentField/Words/cards.module.scss';

// TODO: создать стили
const FormError = (): ReactElement => (
  <div className={`${classes.cardFormMessage} ${classes.cardFormMessageError}`}>
    Заполните форму полностью
  </div>
);

export default FormError;
