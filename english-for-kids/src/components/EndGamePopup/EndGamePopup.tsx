import React, { ReactElement } from 'react';

import classes from './endGamePopup.module.scss';

const EndGamePopup = (): ReactElement => {
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <h3 className={classes.title}>RESULT</h3>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default EndGamePopup;
