import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navigation.module.scss';

const NavigationItem = (props: any): ReactElement => {
  const { title, onLinkClick } = props;
  return (
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
};

export default NavigationItem;
