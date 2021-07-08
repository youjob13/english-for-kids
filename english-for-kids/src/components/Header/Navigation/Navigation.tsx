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
import {
  EMPTY_LINE,
  INITIAL_REF_NAV_VALUE,
  Path,
} from '../../../shared/globalVariables';

const Navigation = ({ categories }: INavigationProps): ReactElement => {
  const { isOpenMenu, toggleMenu } = useContext(MenuContext);
  const refNav = useRef<HTMLElement>(INITIAL_REF_NAV_VALUE);

  useOnClickOutsideOrNavItem(refNav, () => {
    if (isOpenMenu) toggleMenu();
  });

  const NAV_STYLES = isOpenMenu ? NAV_MENU_STYLES : NAV_MENU_HIDDEN_STYLES;

  return (
    <nav ref={refNav} className={NAV_STYLES}>
      <ul
        role="menu" // TODO: read about
        onClick={({ target }) =>
          (target as HTMLElement).closest('a') && toggleMenu()
        }
        tabIndex={0}
        onKeyPress={() => 'menu is closed'}
      >
        <li>
          <NavLink
            to={Path.MAIN}
            className={NAV_ITEM_STYLES}
            activeClassName={NAV_ITEM_ACTIVE_STYLES}
          >
            Main
            <img
              className={NAV_ITEM_ICON_STYLES}
              src={MAIN_ICON}
              alt={EMPTY_LINE}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={Path.STATISTICS}
            className={NAV_ITEM_STYLES}
            activeClassName={NAV_ITEM_ACTIVE_STYLES}
          >
            Statistics
            <img
              className={NAV_ITEM_ICON_STYLES}
              src={STATISTICS_ICON}
              alt={EMPTY_LINE}
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
