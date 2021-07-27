import React, { ReactElement } from 'react';
import { NAV_LIST } from '../../../../shared/stylesVariables';
import NavigationItem from './NavigationItem/NavigationItem';
import { navigationAdminPanel } from '../../../../shared/globalVariables';

const Navigation = (): ReactElement => (
  <nav>
    <ul className={NAV_LIST}>
      {navigationAdminPanel.map((navigationLink) => (
        <NavigationItem {...navigationLink} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
