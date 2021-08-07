import React, { ReactElement } from 'react';
import RSS_LOGO from '../../../assets/images/RSS_logo.svg';
import GITHUB_LOGO from '../../../assets/images/github.png';
import classes from './footer.module.scss';
import {
  ImageDescription,
  MY_GITHUB,
  RS_SCHOOL,
  Target,
} from '../../../shared/globalVariables';

const Footer = (): ReactElement => (
  <footer className={classes.footer}>
    <img
      className={classes.footerLogo}
      src={RSS_LOGO}
      alt={ImageDescription.RS_SCHOOL}
    />
    <a className={classes.footerLink} href={MY_GITHUB} target={Target.BLANK}>
      youjob13
      <img
        className={classes.footerLogo}
        src={GITHUB_LOGO}
        alt={ImageDescription.GITHUB}
      />
    </a>
    <a className={classes.footerLink} href={RS_SCHOOL} target={Target.BLANK}>
      RS School
    </a>
    <p>2021</p>
  </footer>
);

export default Footer;
