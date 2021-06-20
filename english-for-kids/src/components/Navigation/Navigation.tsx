import './navigation.scss';
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

const Navigation = (): ReactElement => {
  return (
    <nav className="nav-menu">
      <Menu
        style={{ width: 'auto' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        <Menu.Item key="1">
          <NavLink
            to="main"
            className="nav-item"
            activeClassName="nav-item_active"
          >
            Main page
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink
            to="cat1"
            className="nav-item"
            activeClassName="nav-item_active"
          >
            Category 1
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink
            to="cat2"
            className="nav-item"
            activeClassName="nav-item_active"
          >
            Category 2
          </NavLink>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default Navigation;
