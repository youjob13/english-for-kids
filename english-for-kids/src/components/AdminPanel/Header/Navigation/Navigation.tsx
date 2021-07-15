import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navigation.module.scss';

const Navigation = (): ReactElement => {
  return (
    <nav>
      <ul className={classes.nav}>
        <li className={classes.navItem}>
          <NavLink
            to="/admin-panel/categories"
            className={classes.navItemLink}
            activeClassName={classes.navItemLinkActive}
          >
            Categories
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink
            to="/def" // TODO:
            className={classes.navItemLink}
            activeClassName={classes.navItemLinkActive}
          >
            Words
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
