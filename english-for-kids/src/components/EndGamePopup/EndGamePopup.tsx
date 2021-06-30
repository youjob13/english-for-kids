import React, { ReactElement } from 'react';

import classes from './endGamePopup.module.scss';

const OVERLAY_STYLES = classes.overlay;
const CONTENT_STYLES = classes.content;
const TITLE_STYLES = classes.title;

const EndGamePopup = (): ReactElement => {
  return (
    <div className={OVERLAY_STYLES}>
      <div className={CONTENT_STYLES}>
        <h3 className={TITLE_STYLES}>RESULT</h3>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default EndGamePopup;
