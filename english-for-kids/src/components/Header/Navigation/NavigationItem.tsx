import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navigation.module.scss';
import { INavigationItemProps } from '../../../shared/interfaces/props-models';
import capitalizeWord from '../../../shared/helpersFunction/capitalizeWord';

const NAV_ITEM = classes.navItem;
const NAV_ITEM_ACTIVE = classes.navItemActive;

const NavigationItem = ({ category }: INavigationItemProps): ReactElement => (
  <li>
    <NavLink
      to={`/section/${category}`}
      className={NAV_ITEM}
      activeClassName={NAV_ITEM_ACTIVE}
    >
      {capitalizeWord(category)}
    </NavLink>
  </li>
);

export default NavigationItem;
