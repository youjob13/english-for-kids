import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigationProps } from '../../../shared/interfaces/props-models';
import NavigationItem from './NavigationItem';
import classes from './navigation.module.scss';

const Navigation = ({ cards }: INavigationProps): ReactElement => {
  return (
    <nav className={classes.navMenu}>
      <ul>
        <li>
          <NavLink
            to="/main"
            className={classes.navItem}
            activeClassName={classes.navItemActive}
          >
            Main page
          </NavLink>
        </li>
        {cards.map((card, index) => (
          <NavigationItem
            key={index.toString()}
            category={Object.keys(card).toString()}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
