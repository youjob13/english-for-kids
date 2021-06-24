import React, { ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import classes from './header.module.scss';
import Navigation from './Navigation/Navigation';
import { toggleGameMode } from '../../store/gameSlice';
import { IHeaderProps } from '../../shared/interfaces/props-models';

const Header = ({ pressBtnChangeGameMode }: IHeaderProps): ReactElement => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className={classes.header}>
      {isOpenMenu && <Navigation />}
      <button type="button" onClick={() => setIsOpenMenu(!isOpenMenu)}>
        Menu
      </button>
      <button type="button" onClick={pressBtnChangeGameMode}>
        swith
      </button>
    </header>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  pressBtnChangeGameMode: () => dispatch(toggleGameMode()),
});

export default connect(null, mapDispatchToProps)(Header);
