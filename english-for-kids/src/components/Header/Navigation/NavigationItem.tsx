import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navigation.module.scss';
import { INavigationItemProps } from '../../../shared/interfaces/props-models';

const NavigationItem = ({ category }: INavigationItemProps): ReactElement => (
  <li>
    <NavLink to={`/section/${category}`} className={classes.navItem}>
      {category}
    </NavLink>
  </li>
);

export default NavigationItem;
