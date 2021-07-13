import React, { ReactElement } from 'react';
import CardsField from './CardsField/CardsField';
import Header from './Header/Header';
import { APP_CONTENT } from '../../shared/stylesVariables';

const AdminPage = (): ReactElement => {
  return (
    <>
      <Header />
      <main className={APP_CONTENT}>
        <CardsField />
      </main>
    </>
  );
};

export default AdminPage;
