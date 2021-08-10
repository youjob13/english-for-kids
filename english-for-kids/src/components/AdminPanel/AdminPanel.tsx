import React, { ReactElement } from 'react';
import Header from './Header/Header';
import ContentField from './ContentField/ContentField';
import { APP_CONTENT_STYLES } from '../../shared/globalVariables';
import Footer from '../Game/Footer/Footer';

const AdminPanel = (): ReactElement => (
  <>
    <Header />
    <main className={APP_CONTENT_STYLES}>
      <ContentField />
    </main>
    <Footer />
  </>
);
export default AdminPanel;
