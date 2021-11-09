import React, { ReactElement } from 'react';
import classes from './preloader.module.scss';

const Preloader = (): ReactElement => (
  <div className={classes.preloader}>
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
