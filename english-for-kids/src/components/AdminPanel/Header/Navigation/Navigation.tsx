import React, { ReactElement } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { navigationAdminPanel } from '../../../../shared/globalVariables';
import classes from './navigation.module.scss';

const Navigation = (): ReactElement => (
  <nav>
    <ul className={classes.nav}>
      {navigationAdminPanel.map((navigationLink) => (
        <NavigationItem {...navigationLink} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
