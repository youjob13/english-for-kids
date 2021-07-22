import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { CardsReducerType } from '../../../shared/interfaces/store-models';
import Cards from './Cards/Cards';
import Categories from './Categories/Categories';

const ContentField = (): ReactElement => {
  const { cardsData } = useSelector(
    (state: CardsReducerType) => state.cardsReducer
  );

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
