import React, { ReactElement } from 'react';
import classes from './formError.module.scss';

const FormError = (): ReactElement => (
  <div className={`${classes.cardFormMessage} ${classes.cardFormMessageError}`}>
    Заполните форму полностью
  </div>
);

export default FormError;
