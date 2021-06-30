import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigationProps } from '../../../shared/interfaces/props-models';
import NavigationItem from './NavigationItem';
import classes from './navigation.module.scss';

const NAV_MENU = classes.navMenu;
const NAV_ITEM = classes.navItem;
const NAV_ITEM_ACTIVE = classes.navItemActive;

const Navigation = ({ categories }: INavigationProps): ReactElement => {
  return (
    <nav className={NAV_MENU}>
      <ul>
        <li>
          <NavLink
            to="/main"
            className={NAV_ITEM}
            activeClassName={NAV_ITEM_ACTIVE}
          >
            Main page
          </NavLink>
        </li>
        {categories.map((category, index) => (
          <NavigationItem key={index.toString()} category={category} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
