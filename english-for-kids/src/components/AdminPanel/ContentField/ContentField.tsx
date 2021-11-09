import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Words from './Words/Words';
import Categories from './Categories/Categories';
import { getWordsState } from '../../../store/selectors';
import { Path } from '../../../shared/globalVariables';
import ErrorPage from '../../ErrorPage/ErrorPage';

const ContentField = (): ReactElement => {
  const { cardsData } = useSelector(getWordsState);

  return (
    <Switch>
      {!localStorage.token && (
        <Redirect from={Path.ADMIN_PANEL_ROOT} to={Path.ROOT} />
      )}
      <Route path={Path.ADMIN_PANEL_WORD}>
        <Words cardsData={cardsData} />
      </Route>
      <Route path={Path.ADMIN_PANEL_CATEGORIES}>
        <Categories cardsData={cardsData} />
      </Route>
      <Redirect
        exact
        from={Path.ADMIN_PANEL_ROOT}
        to={Path.ADMIN_PANEL_CATEGORIES}
      />
      <Route
        path={Path.OTHER}
        render={() => <ErrorPage errorMessage="404 Not Found" />}
      />
    </Switch>
  );
};

export default ContentField;
