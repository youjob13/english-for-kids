import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigationItemProps } from '../../../../shared/interfaces/props-models';
import capitalizeWord from '../../../../shared/helperFunctions/capitalizeWord';
import {
  NAV_ITEM_ACTIVE_STYLES,
  NAV_ITEM_STYLES,
} from '../../../../shared/stylesVariables';
import { SECTION } from '../../../../shared/globalVariables';

const NavigationItem = ({ category }: INavigationItemProps): ReactElement => (
  <li>
    <NavLink
      to={`/${SECTION}/${category}`}
      className={NAV_ITEM_STYLES}
      activeClassName={NAV_ITEM_ACTIVE_STYLES}
    >
      {capitalizeWord(category)}
    </NavLink>
  </li>
);

export default NavigationItem;
