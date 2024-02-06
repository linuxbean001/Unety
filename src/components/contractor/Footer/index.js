import React from 'react';
import { LinkedinIcon } from 'components/icons';
import logoColor from 'images/logo-color.png';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className="contractor-signup__footer">
      <div className={styles.email}>Questions? Email <a href="mailto:sales@unety.io" target="_blank" rel="noopener noreferrer">sales@unety.io</a></div>
      <div className="contractor-signup__footer__inner">
        <div className="contractor-signup__footer__logo">
          <img src={logoColor} alt="unety" />
        </div>
        <div className="contractor-signup__footer__copy">
          <span>&copy; {new Date().getFullYear()} Unety All rights reserved</span>
          <a href="https://www.linkedin.com/company/unety-io" rel="noopener noreferrer" target="_blank">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
