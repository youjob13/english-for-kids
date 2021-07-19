import React, { ReactElement, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import {
  AuthReducerType,
  CardsReducerType,
} from '../../../shared/interfaces/store-models';
import { Path } from '../../../shared/globalVariables';
import { LoginContext } from '../../../shared/context';
import Cards from './Cards/Cards';
import Categories from './Categories/Categories';

const ContentField = (): ReactElement => {
  const history = useHistory();
  const { toggleLoginPopup } = useContext(LoginContext);
  const { isAuth } = useSelector((state: AuthReducerType) => state.authReducer);
  const { cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );

  useEffect(() => {
    if (!isAuth) {
      history.push(Path.MAIN);
      toggleLoginPopup();
    }
  }, []);

  return (
    <Switch>
      <Route path="/admin-panel/categories/:category">
        <Cards cardsData={cardsData} />
      </Route>
      <Route path="/admin-panel/categories/">
        <Categories cardsData={cardsData} />
      </Route>
    </Switch>
  );
};

export default ContentField;
