import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigationItemProps } from '../../../shared/interfaces/props-models';
import capitalizeWord from '../../../shared/helpersFunction/capitalizeWord';
import {
  NAV_ITEM_ACTIVE_STYLES,
  NAV_ITEM_STYLES,
} from '../../../shared/stylesVariables';

const NavigationItem = ({ category }: INavigationItemProps): ReactElement => (
  <li>
    <NavLink
      to={`/section/${category}`}
      className={NAV_ITEM_STYLES}
      activeClassName={NAV_ITEM_ACTIVE_STYLES}
    >
      {capitalizeWord(category)}
    </NavLink>
  </li>
);

export default NavigationItem;
