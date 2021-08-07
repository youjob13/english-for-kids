import React, { ReactElement } from 'react';
import classes from './loginButton.module.scss';
import { ElemRole } from '../../../../shared/globalVariables';
import { ILoginButtonProps } from '../../../../shared/interfaces/props-models';

const LoginButton = ({
  onLoginButtonClick,
}: ILoginButtonProps): ReactElement => (
  <button
    onClick={onLoginButtonClick}
    className={classes.button}
    type={ElemRole.BUTTON}
  >
    Login
  </button>
);
export default LoginButton;
