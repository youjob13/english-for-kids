import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigationItemProps } from '../../../shared/interfaces/props-models';
import capitalizeWord from '../../../shared/helpersFunction/capitalizeWord';
import { NAV_ITEM, NAV_ITEM_ACTIVE } from '../../../shared/globalVariables';

const NavigationItem = ({ category }: INavigationItemProps): ReactElement => (
  <li>
    <NavLink
      to={`/section/${category}`}
      className={NAV_ITEM}
      activeClassName={NAV_ITEM_ACTIVE}
    >
      {capitalizeWord(category)}
    </NavLink>
  </li>
);

export default NavigationItem;
