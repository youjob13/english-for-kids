import React, { ReactElement, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import {
  AuthReducerType,
  CardsReducerType,
} from '../../../shared/interfaces/store-models';
import { Path } from '../../../shared/globalVariables';
import { LoginContext } from '../../../shared/context';
import CardCategoryEdit from './CardCategoryEdit/CardCategoryEdit';
import classes from './cardsField.module.scss';
import NewCard from '../NewCard/NewCard';
import Cards from './Cards/Cards';

const CardsField = (): ReactElement => {
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
        <div className={classes.cardsField}>
          {cardsData.map(({ category, cards, id }) => (
            <CardCategoryEdit
              key={id}
              id={id}
              category={category}
              cardsCount={cards.length}
            />
          ))}
          <NewCard text="Create new Category" />
        </div>
      </Route>
    </Switch>
  );
};

export default CardsField;
