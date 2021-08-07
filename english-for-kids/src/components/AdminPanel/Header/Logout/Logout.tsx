import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ElemRole, Path } from '../../../../shared/globalVariables';
import { logoutUser } from '../../../../store/authSlice';
import classes from '../header.module.scss';

const Logout = (): ReactElement => {
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
      Logout
    </button>
  );
};

export default Logout;
