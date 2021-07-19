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
import Cards from './Cards/Cards';
import NewCategory from './NewCategory/NewCategory';

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
          {cardsData.map(({ category, cards, _id }) => (
            <CardCategoryEdit
              key={_id}
              id={_id}
              category={category}
              cardsCount={cards ? cards.length : 0}
            />
          ))}
          <NewCategory />
        </div>
      </Route>
    </Switch>
  );
};

export default CardsField;
