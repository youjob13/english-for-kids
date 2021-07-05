import React, { ReactElement, useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigationProps } from '../../../shared/interfaces/props-models';
import NavigationItem from './NavigationItem/NavigationItem';
import {
  NAV_MENU_HIDDEN_STYLES,
  NAV_MENU_STYLES,
  NAV_ITEM_STYLES,
  NAV_ITEM_ACTIVE_STYLES,
  NAV_ITEM_ICON_STYLES,
} from '../../../shared/stylesVariables';
import useOnClickOutsideOrNavItem from '../../../shared/hooks/useOnClickOutsideOrNavItem';
import MenuContext from '../../../shared/context';
import MAIN_ICON from '../../../assets/images/main-icon.png';
import STATISTICS_ICON from '../../../assets/images/statistics-icon.png';

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
            Main <img className={NAV_ITEM_ICON_STYLES} src={MAIN_ICON} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={NAV_ITEM_STYLES}
            activeClassName={NAV_ITEM_ACTIVE_STYLES}
          >
            Statistics
            <img
              className={NAV_ITEM_ICON_STYLES}
              src={STATISTICS_ICON}
              alt=""
            />
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
