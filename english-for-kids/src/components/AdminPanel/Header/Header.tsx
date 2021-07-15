import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import classes from './header.module.scss';
import { toggleAuthMode } from '../../../store/authSlice';
import Navigation from './Navigation/Navigation';

const ADMIN_HEADER = classes.header;

const Header = (): ReactElement => {
  const dispatch = useDispatch();

  const exitFromAdminPanel = () => {
    localStorage.removeItem('token');
    dispatch(toggleAuthMode()); // TODO
  };

  return (
    <header className={ADMIN_HEADER}>
      <Navigation />
      <button onClick={exitFromAdminPanel} type="button">
        Logout
      </button>
    </header>
  );
};

export default Header;
