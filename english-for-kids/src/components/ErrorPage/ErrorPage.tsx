import React, { ReactElement } from 'react';
import classes from './errorPage.module.scss';

export interface IErrorPageProps {
  errorMessage: string;
}

const ErrorPage = ({ errorMessage }: IErrorPageProps): ReactElement => {
  return (
    <div>
      <h2 className={classes.title}>{errorMessage}</h2>
    </div>
  );
};

export default ErrorPage;
