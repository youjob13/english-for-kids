import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ElemRole, Path } from '../../globalVariables';
import { logoutUser } from '../../../store/authSlice';
import { LOGOUT } from '../../stylesVariables';

const Logout = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  const exitFromAdminPanel = () => {
    dispatch(logoutUser());
    history.push(Path.ROOT);
  };

  return (
    <button
      className={LOGOUT}
      onClick={exitFromAdminPanel}
      type={ElemRole.BUTTON}
    >
      Logout
    </button>
  );
};

export default Logout;
