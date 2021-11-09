import React, { ReactElement } from 'react';
import Navigation from './Navigation/Navigation';
import Logout from './Logout/Logout';
import classes from './header.module.scss';

const Header = (): ReactElement => (
  <header className={classes.header}>
    <Navigation />
    <Logout />
  </header>
);

export default Header;
