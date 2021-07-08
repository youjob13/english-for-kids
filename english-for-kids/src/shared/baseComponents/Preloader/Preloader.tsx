import React, { ReactElement } from 'react';
import { PRELOADER_STYLES } from '../../stylesVariables';

const Preloader = (): ReactElement => (
  <div className={PRELOADER_STYLES}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Preloader;
