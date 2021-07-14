import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import classes from './header.module.scss';
import { toggleAuthMode } from '../../../store/authSlice';

const ADMIN_HEADER = classes.header;

const Header = (): ReactElement => {
  const dispatch = useDispatch();

  const exitFromAdminPanel = () => {
    dispatch(toggleAuthMode());
  };

  return (
    <header className={ADMIN_HEADER}>
      <button onClick={exitFromAdminPanel} type="button">
        Logout
      </button>
    </header>
  );
};

export default Header;
