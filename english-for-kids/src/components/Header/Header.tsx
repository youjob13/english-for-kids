import './header.scss';
import React, { ReactElement, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import SwitchBtn from '../../shared/antDesignComponents/SwitchBtn/Switch';

const Header = (): ReactElement => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="header">
      {isOpenMenu && <Navigation />}
      <button type="button" onClick={() => setIsOpenMenu(!isOpenMenu)}>
        Menu
      </button>
      <SwitchBtn />
    </header>
  );
};

export default Header;
