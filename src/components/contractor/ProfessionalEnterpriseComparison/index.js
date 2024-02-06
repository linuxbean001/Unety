import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

import enterpriseSrc from './enterprise.png';
import professionalSrc from './professional.png'

const ProfessionalEnterpriseComparison = (props) => {
  const {
    title,
    text,
  } = props;

  return (
    <div className={styles.layout}>
      <div className={styles.well}>
        <h2 className="contractor-signup__tools__title">{ title }</h2>
        <div className="contractor-signup__tools">{text}</div>
        <div className={classnames('contractor-signup__tools', styles.grid)}>
          <div className="contractor-signup__tools__item__image">
            <img src={professionalSrc} alt="Unety professional features" />
            <a href="#dont-wait" className={styles.buttonLink}><button className={styles.button}>Sign up for free</button></a>
          </div>
          <div className="contractor-signup__tools__item__image">
            <img src={enterpriseSrc} alt="Unety enterprise features" />
            <a href="https://share.hsforms.com/1QeMY1U7QTsyXgDKYrHNLEQ43vry" target="_blank" rel="noopener noreferrer" className={styles.buttonLink}><button className={styles.button}>Request information</button></a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProfessionalEnterpriseComparison;
