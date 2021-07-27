import React, { ReactElement } from 'react';
import Navigation from './Navigation/Navigation';
import Logout from '../../../shared/baseComponents/Logout/Logout';
import { ADMIN_HEADER } from '../../../shared/stylesVariables';

const Header = (): ReactElement => (
  <header className={ADMIN_HEADER}>
    <Navigation />
    <Logout />
  </header>
);

export default Header;
