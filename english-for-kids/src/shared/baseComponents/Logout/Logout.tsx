import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Path } from '../../globalVariables';
import { logoutUser } from '../../../store/authSlice';
import { LOGOUT } from '../../stylesVariables';

const Logout = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  const exitFromAdminPanel = () => {
    dispatch(logoutUser());
    history.push(Path.MAIN);
  };

  return (
    <button className={LOGOUT} onClick={exitFromAdminPanel} type="button">
      Logout
    </button>
  );
};

export default Logout;
