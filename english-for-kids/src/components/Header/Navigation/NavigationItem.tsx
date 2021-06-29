import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navigation.module.scss';
import { INavigationItemProps } from '../../../shared/interfaces/props-models';
import capitalizeWord from '../../../shared/helpersFunction/capitalizeWord';

const NavigationItem = ({ category }: INavigationItemProps): ReactElement => (
  <li>
    <NavLink
      to={`/section/${category}`}
      className={classes.navItem}
      activeClassName={classes.navItemActive}
    >
      {capitalizeWord(category)}
    </NavLink>
  </li>
);

export default NavigationItem;
