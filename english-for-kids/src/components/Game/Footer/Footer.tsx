import React, { ReactElement } from 'react';
import {
  FOOTER_LINK_STYLES,
  FOOTER_LOGO_STYLES,
  FOOTER_STYLES,
} from '../../../shared/stylesVariables';
import RSS_LOGO from '../../../assets/images/RSS_logo.svg';
import GITHUB_LOGO from '../../../assets/images/github.png';

const Footer = (): ReactElement => {
  return (
    <footer className={FOOTER_STYLES}>
      <img className={FOOTER_LOGO_STYLES} src={RSS_LOGO} alt="RS School" />
      <a
        className={FOOTER_LINK_STYLES}
        href="https://github.com/youjob13"
        rel="noreferrer"
        target="_blank"
      >
        youjob13
        <img className={FOOTER_LOGO_STYLES} src={GITHUB_LOGO} alt="Git Hub" />
      </a>
      <a
        className={FOOTER_LINK_STYLES}
        href="https://rs.school/js/"
        rel="noreferrer"
        target="_blank"
      >
        RS School
      </a>
      <p>2021</p>
    </footer>
  );
};

export default Footer;
