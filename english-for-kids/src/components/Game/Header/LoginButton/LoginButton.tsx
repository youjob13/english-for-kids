import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './loginButton.module.scss';
import { ElemRole, LocalesKey } from '../../../../shared/globalVariables';
import { ILoginButtonProps } from '../../../../shared/interfaces/props-models';

const LoginButton = ({
  onLoginButtonClick,
}: ILoginButtonProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <button
      onClick={onLoginButtonClick}
      className={classes.button}
      type={ElemRole.BUTTON}
    >
      {t(LocalesKey.LOGIN_BTN)}
    </button>
  );
};
export default LoginButton;
