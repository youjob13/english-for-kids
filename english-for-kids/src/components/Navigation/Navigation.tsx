import './navigation.scss';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (): ReactElement => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="main" activeClassName="nav-active">
            Main page
          </NavLink>
        </li>
        <li>
          <NavLink to="cat1" activeClassName="nav-active">
            Category 1
          </NavLink>
        </li>
        <li>
          <NavLink to="cat2" activeClassName="nav-active">
            Category 2
          </NavLink>
        </li>
        <li>
          <a href="##">Category 3</a>
        </li>
        <li>
          <a href="##">Category 4</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
