import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ElemRole, Path } from '../../../../shared/globalVariables';
import { logoutUser } from '../../../../store/authSlice';
import classes from './logout.module.scss';

const Logout = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();

  const exitFromAdminPanel = () => {
    dispatch(logoutUser());
    history.push(Path.ROOT);
  };

  return (
    <button
      className={classes.logout}
      onClick={exitFromAdminPanel}
      type={ElemRole.BUTTON}
    >
      {t('logout')}
    </button>
  );
};

export default Logout;
