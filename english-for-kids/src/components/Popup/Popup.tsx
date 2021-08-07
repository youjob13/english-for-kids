import React, { Props, ReactElement } from 'react';
import classes from './EndGamePopup/endGamePopup.module.scss';

const Popup = ({ children }: Props<string>): ReactElement => {
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Popup;
