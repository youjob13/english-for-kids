import React, { ReactElement } from 'react';
import { LOGIN_BUTTON } from '../../../shared/stylesVariables';

export interface ILoginButton {
  onLoginButtonClick: () => void;
}

const LoginButton = ({ onLoginButtonClick }: ILoginButton): ReactElement => {
  return (
    <button onClick={onLoginButtonClick} className={LOGIN_BUTTON} type="button">
      Login
    </button>
  );
};
export default LoginButton;
