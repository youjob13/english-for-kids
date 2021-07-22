import React, { ReactElement } from 'react';
import classes from './header.module.scss';
import Navigation from './Navigation/Navigation';
import Logout from '../../../shared/baseComponents/Logout/Logout';

const ADMIN_HEADER = classes.header;

const Header = (): ReactElement => (
  <header className={ADMIN_HEADER}>
    <Navigation />
    <Logout />
  </header>
);

export default Header;
