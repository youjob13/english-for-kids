import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import {
  NAV_ITEM,
  NAV_ITEM_LINK,
  NAV_ITEM_LINK_ACTIVE,
} from '../../../../../shared/stylesVariables';
import { IAdminNavigationItemProps } from '../../../../../shared/interfaces/props-models';

const NavigationItem = ({
  name,
  path,
}: IAdminNavigationItemProps): ReactElement => (
  <li className={NAV_ITEM}>
    <NavLink
      to={path}
      className={NAV_ITEM_LINK}
      activeClassName={NAV_ITEM_LINK_ACTIVE}
    >
      {name}
    </NavLink>
  </li>
);

export default NavigationItem;
