import React, { ReactElement } from 'react';
import Header from './Header/Header';
import { APP_CONTENT } from '../../shared/stylesVariables';
import ContentField from './ContentField/ContentField';

const AdminPanel = (): ReactElement => {
  return (
    <>
      <Header />
      <main className={APP_CONTENT}>
        <ContentField />
      </main>
    </>
  );
};

export default AdminPanel;
