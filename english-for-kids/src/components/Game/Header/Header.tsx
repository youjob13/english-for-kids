import React, { ReactElement, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation/Navigation';
import { resetGameData, toggleGameMode } from '../../../store/gameSlice';
import Switch from '../../../shared/baseComponents/Switch/Switch';
import MenuButton from '../../../shared/baseComponents/MenuButton/MenuButton';
import MenuContext, { LoginContext } from '../../../shared/context';
import { INITIAL_IS_OPEN_MENU_VALUE } from '../../../shared/globalVariables';
import LoginButton from './LoginButton/LoginButton';
import Logout from '../../AdminPanel/Header/Logout/Logout';
import classes from './header.module.scss';
import { getGameState, getWordsState } from '../../../store/selectors';

const Header = (): ReactElement => {
  const dispatch = useDispatch();
  const [isOpenMenu, toggleMenu] = useState(INITIAL_IS_OPEN_MENU_VALUE);
  const { toggleLoginPopup } = useContext(LoginContext);
  const { cardsData } = useSelector(getWordsState);
  const { gameMode } = useSelector(getGameState);

  const categoryNames = cardsData.map((cardData) => cardData.category);

  const switchGameMode = () => {
    dispatch(toggleGameMode());
    dispatch(resetGameData());
  };

  const toggleMenuMode = () => {
    toggleMenu(!isOpenMenu);
  };

  return (
    <MenuContext.Provider value={{ isOpenMenu, toggleMenu: toggleMenuMode }}>
      <header className={classes.header}>
        <Navigation categories={categoryNames} />
        <MenuButton />
        <Switch gameMode={gameMode} onCheckboxClick={switchGameMode} />
        {localStorage.token ? (
          <Logout />
        ) : (
          <LoginButton onLoginButtonClick={toggleLoginPopup} />
        )}
      </header>
    </MenuContext.Provider>
  );
};

export default Header;
