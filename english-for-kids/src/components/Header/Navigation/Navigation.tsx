import React, { ReactElement, useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigationProps } from '../../../shared/interfaces/props-models';
import NavigationItem from './NavigationItem';
import {
  NAV_ITEM_ACTIVE_STYLES,
  NAV_ITEM_STYLES,
  NAV_MENU_HIDDEN_STYLES,
  NAV_MENU_STYLES,
} from '../../../shared/stylesVariables';
import useOnClickOutsideOrNavItem from '../../../shared/hooks/useOnClickOutsideOrNavItem';
import MenuContext from '../../../shared/context';

const Navigation = ({ categories }: INavigationProps): ReactElement => {
  const { isOpenMenu, toggleMenu } = useContext(MenuContext);
  const node = useRef<HTMLElement>(null);

  useOnClickOutsideOrNavItem(node, () => {
    if (isOpenMenu) toggleMenu();
  });

  return (
    <nav
      ref={node}
      className={isOpenMenu ? NAV_MENU_STYLES : NAV_MENU_HIDDEN_STYLES}
    >
      <ul
        role="menu"
        onClick={({ target }) =>
          (target as HTMLElement).closest('a') && toggleMenu()
        }
        tabIndex={0}
        onKeyPress={() => 'menu is closed'}
      >
        <li>
          <NavLink
            to="/main"
            className={NAV_ITEM_STYLES}
            activeClassName={NAV_ITEM_ACTIVE_STYLES}
          >
            Main page
          </NavLink>
          <NavLink
            to="/statistics"
            className={NAV_ITEM_STYLES}
            activeClassName={NAV_ITEM_ACTIVE_STYLES}
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
