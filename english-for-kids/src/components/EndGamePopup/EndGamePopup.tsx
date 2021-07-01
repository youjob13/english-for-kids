import React, { ReactElement } from 'react';
import {
  OVERLAY_STYLES,
  TEXT_CONTENT_STYLES,
  TITLE_STYLES,
} from '../../shared/globalVariables';

const EndGamePopup = (): ReactElement => {
  return (
    <div className={OVERLAY_STYLES}>
      <div className={TEXT_CONTENT_STYLES}>
        <h3 className={TITLE_STYLES}>RESULT</h3>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default EndGamePopup;
