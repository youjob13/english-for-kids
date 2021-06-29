import React, { ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import classes from './header.module.scss';
import Navigation from './Navigation/Navigation';
import { toggleGameMode } from '../../store/gameSlice';
import { IHeaderProps } from '../../shared/interfaces/props-models';
import { CardsReducerType } from '../../shared/interfaces/store-models';
import getCardsData from '../../store/cardsSelectors';
import Switch from '../../shared/baseComponents/Switch/Switch';
import MenuBtn from '../../shared/baseComponents/MenuBtn/MenuBtn';

const Header = ({
  pressBtnChangeGameMode,
  cards,
}: IHeaderProps): ReactElement => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  document.addEventListener('click', (e: any) => console.log(e.target));
  return (
    <header className={classes.header}>
      {isOpenMenu && <Navigation cards={cards} />}
      <MenuBtn onMenuBtnClick={() => setIsOpenMenu(!isOpenMenu)} />
      <Switch on="Play" off="Train" onCheckboxClick={pressBtnChangeGameMode} />
    </header>
  );
};

const mapStateToProps = (state: CardsReducerType) => ({
  cards: getCardsData(state.cardsReducer),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  pressBtnChangeGameMode: () => dispatch(toggleGameMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
