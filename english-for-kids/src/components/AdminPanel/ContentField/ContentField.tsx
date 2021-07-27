import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Words from './Words/Words';
import Categories from './Categories/Categories';
import { getWordsState } from '../../../shared/selectors';
import { Path } from '../../../shared/globalVariables';

const ContentField = (): ReactElement => {
  const { cardsData } = useSelector(getWordsState);

  return (
    <Switch>
      <Route path={Path.ADMIN_PANEL_WORD}>
        <Words cardsData={cardsData} />
      </Route>
      <Route path={Path.ADMIN_PANEL_CATEGORIES}>
        <Categories cardsData={cardsData} />
      </Route>
    </Switch>
  );
};

export default ContentField;
