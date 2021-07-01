import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigationProps } from '../../../shared/interfaces/props-models';
import NavigationItem from './NavigationItem';
import {
  NAV_ITEM,
  NAV_ITEM_ACTIVE,
  NAV_MENU,
} from '../../../shared/globalVariables';

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
          <NavLink
            to="/statistics"
            className={NAV_ITEM}
            activeClassName={NAV_ITEM_ACTIVE}
          >
            Statistics
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
