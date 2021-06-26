import React, { ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import classes from './header.module.scss';
import Navigation from './Navigation/Navigation';
import { toggleGameMode } from '../../store/gameSlice';
import { IHeaderProps } from '../../shared/interfaces/props-models';
import { CardsReducerType } from '../../shared/interfaces/store-models';

const Header = ({
  pressBtnChangeGameMode,
  cards,
}: IHeaderProps): ReactElement => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className={classes.header}>
      {isOpenMenu && <Navigation cards={cards} />}
      <button type="button" onClick={() => setIsOpenMenu(!isOpenMenu)}>
        Menu
      </button>
      <button type="button" onClick={pressBtnChangeGameMode}>
        swith
      </button>
    </header>
  );
};

const mapStateToProps = (state: CardsReducerType) => ({
  cards: state.cardsReducer.cards,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  pressBtnChangeGameMode: () => dispatch(toggleGameMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
