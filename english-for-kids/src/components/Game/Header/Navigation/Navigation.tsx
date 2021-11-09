import React, { ReactElement, useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { INavigationProps } from '../../../../shared/interfaces/props-models';
import NavigationItem from './NavigationItem/NavigationItem';
import useOnClickOutsideOrNavItem from '../../../../shared/hooks/useOnClickOutsideOrNavItem';
import MenuContext from '../../../../shared/context';
import MAIN_ICON from '../../../../assets/images/main-icon.png';
import STATISTICS_ICON from '../../../../assets/images/statistics-icon.png';
import {
  ElemRole,
  EMPTY_LINE,
  INITIAL_REF_NAV_VALUE,
  LocalesKey,
  Path,
} from '../../../../shared/globalVariables';
import classes from './navigation.module.scss';

const Navigation = ({ categories }: INavigationProps): ReactElement => {
  const { t } = useTranslation();
  const { isOpenMenu, toggleMenu } = useContext(MenuContext);
  const refNav = useRef<HTMLElement>(INITIAL_REF_NAV_VALUE);

  useOnClickOutsideOrNavItem(refNav, () => {
    if (isOpenMenu) {
      toggleMenu();
    }
  });

  const NAV_STYLES = isOpenMenu
    ? classes.navMenu
    : `${classes.navMenu} ${classes.navMenuHidden}`;

  return (
    <nav ref={refNav} className={NAV_STYLES}>
      <ul
        className={classes.navMenuList}
        role={ElemRole.MENU}
        onClick={({ target }) =>
          (target as HTMLElement).closest('a') && toggleMenu()
        }
      >
        <li>
          <NavLink
            exact
            to={Path.ROOT}
            className={classes.navItem}
            activeClassName={classes.navItemActive}
          >
            {t(LocalesKey.MAIN)}
            <img
              className={classes.navItemIcon}
              src={MAIN_ICON}
              alt={EMPTY_LINE}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={Path.STATISTICS}
            className={classes.navItem}
            activeClassName={classes.navItemActive}
          >
            {t(LocalesKey.STATISTICS)}
            <img
              className={classes.navItemIcon}
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
