import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { IAdminNavigationItemProps } from '../../../../../shared/interfaces/props-models';
import classes from '../navigation.module.scss';

const NavigationItem = ({
  name,
  path,
}: IAdminNavigationItemProps): ReactElement => (
  <li className={classes.navItem}>
    <NavLink
      to={path}
      className={classes.navItemLink}
      activeClassName={classes.navItemLinkActive}
    >
      {name}
    </NavLink>
  </li>
);

export default NavigationItem;
