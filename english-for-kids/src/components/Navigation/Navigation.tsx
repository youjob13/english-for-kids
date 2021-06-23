import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import classes from './navigation.module.scss';

const Navigation = (): ReactElement => {
  return (
    <nav className={classes.navMenu}>
      <Menu
        style={{ width: 'auto' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        <Menu.Item key="1">
          <NavLink to="main" className={classes.navItem}>
            Main page
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="category" className={classes.navItem}>
            Nature
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="category" className={classes.navItem}>
            Animals
          </NavLink>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default Navigation;
