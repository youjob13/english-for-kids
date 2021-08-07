import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigationItemProps } from '../../../../../shared/interfaces/props-models';
import { SECTION } from '../../../../../shared/globalVariables';
import classes from '../navigation.module.scss';

const NavigationItem = ({ category }: INavigationItemProps): ReactElement => (
  <li>
    <NavLink
      to={`/${SECTION}/${category}`}
      className={classes.navItem}
      activeClassName={classes.navItemActive}
    >
      {category}
    </NavLink>
  </li>
);

export default NavigationItem;
