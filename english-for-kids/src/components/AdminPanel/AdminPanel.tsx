import React, { ReactElement } from 'react';
import Header from './Header/Header';
import ContentField from './ContentField/ContentField';
import { APP_CONTENT_STYLES } from '../../shared/globalVariables';

const AdminPanel = (): ReactElement => {
  return (
    <>
      <Header />
      <main className={APP_CONTENT_STYLES}>
        <ContentField />
      </main>
    </>
  );
};

export default AdminPanel;
