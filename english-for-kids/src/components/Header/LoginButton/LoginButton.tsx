import React, { ReactElement } from 'react';
import { LOGIN_BUTTON } from '../../../shared/stylesVariables';

const LoginButton = (): ReactElement => {
  return (
    <button className={LOGIN_BUTTON} type="button">
      Login
    </button>
  );
};
export default LoginButton;
