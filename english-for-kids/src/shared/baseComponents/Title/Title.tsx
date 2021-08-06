import React, { Props, ReactElement } from 'react';
import classes from './title.module.scss';

const Title = ({ children }: Props<string>): ReactElement => (
  <h2 className={classes.title}>{children}</h2>
);

export default Title;
