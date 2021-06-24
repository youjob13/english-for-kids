import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navigation.module.scss';
import { INavigationItemProps } from '../../../shared/interfaces/api-models';

const NavigationItem = ({
  title,
  onLinkClick,
}: INavigationItemProps): ReactElement => (
  <li>
    <NavLink
      onClick={() => onLinkClick(title)}
      to="category"
      className={classes.navItem}
    >
      {title}
    </NavLink>
  </li>
);

export default NavigationItem;
