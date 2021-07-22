import React, { Props, ReactElement } from 'react';
import {
  OVERLAY_STYLES,
  TEXT_CONTENT_STYLES,
} from '../../../shared/stylesVariables';

const Popup = ({ children }: Props<string>): ReactElement => {
  return (
    <div className={OVERLAY_STYLES}>
      <div className={TEXT_CONTENT_STYLES}>{children}</div>
    </div>
  );
};

export default Popup;
