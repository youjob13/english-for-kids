import React, { Props, ReactElement } from 'react';
import classes from './popup.module.scss';

const Popup = ({ children }: Props<string>): ReactElement => (
  <div className={classes.overlay}>
    <div className={classes.content}>{children}</div>
  </div>
);
export default Popup;
