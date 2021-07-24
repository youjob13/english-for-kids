import React, { ReactElement, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation/Navigation';
import { toggleGameMode } from '../../../store/gameSlice';
import {
  AuthReducerType,
  CardsReducerType,
  GameReducerType,
} from '../../../shared/interfaces/store-models';
import Switch from '../../../shared/baseComponents/Switch/Switch';
import MenuButton from '../../../shared/baseComponents/MenuButton/MenuButton';
import MenuContext, { LoginContext } from '../../../shared/context';
import {
  INITIAL_IS_OPEN_MENU_VALUE,
  SWITCH_OFF,
  SWITCH_ON,
} from '../../../shared/globalVariables';
import { HEADER } from '../../../shared/stylesVariables';
import LoginButton from './LoginButton/LoginButton';
import Logout from '../../../shared/baseComponents/Logout/Logout';

const Header = (): ReactElement => {
  const [isOpenMenu, toggleMenu] = useState(INITIAL_IS_OPEN_MENU_VALUE);
  const { toggleLoginPopup } = useContext(LoginContext);
  const dispatch = useDispatch();
  const { cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );
  const { gameMode } = useSelector(
    (state: GameReducerType) => state.gameReducer
  );
  const { isAuth } = useSelector((state: AuthReducerType) => state.authReducer);

  const categoryNames = cardsData.map((cardData) => cardData.category);

  const switchGameMode = () => {
    dispatch(toggleGameMode());
  };

  const toggleMenuMode = () => {
    toggleMenu(!isOpenMenu);
  };

  return (
    <MenuContext.Provider value={{ isOpenMenu, toggleMenu: toggleMenuMode }}>
      <header className={HEADER}>
        <Navigation categories={categoryNames} />
        <MenuButton />
        <Switch
          on={SWITCH_ON}
          off={SWITCH_OFF}
          gameMode={gameMode}
          onCheckboxClick={switchGameMode}
        />
        {isAuth ? (
          <Logout />
        ) : (
          <LoginButton onLoginButtonClick={toggleLoginPopup} />
        )}
      </header>
    </MenuContext.Provider>
  );
};

export default Header;