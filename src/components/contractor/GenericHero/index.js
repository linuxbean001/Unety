import React from 'react';
import ContractorSignUpForm from 'components/form/ContractorSignUpForm';
import heroVideoWebm from 'videos/homepage.webm';
import heroVideoMp4 from 'videos/homepage.mp4';
import logoWhite from 'images/logo-white.png';

import styles from './styles.module.scss';

const DEFAULT_TITLE = 'Calling all Contractors';

const getCopy = ({ version }) => {
  if (version === 'ecoAmerica') {
    return {
      subtitle: <p>Get free access to thousands of exclusive leads for commercial projects of all types from $50,000 to $10 million.</p>
    };
  }

  return {
    subtitle: <p>Get exclusive access to our portfolio of commercial projects from $50,000 to $10&nbsp;million</p>,
  };
};

const GenericHero = ({ version, title: passedTitle, subtitle: passedSubtitle }) => {
  const subtitle = passedSubtitle ? <p>{passedSubtitle}</p> : getCopy({ version }).subtitle;
  const title = passedTitle || DEFAULT_TITLE;

  return (
    <>
      <div className="contractor-signup__background">
        <video autoPlay loop muted playsInline className="up-homepage__hero__video" preload="metadata">
          <source type="video/webm" src={`${heroVideoWebm}#t=0.1`} />
          <source type="video/mp4" src={`${heroVideoMp4}#t=0.1`} />
        </video>
      </div>

      <section className="contractor-signup__hero">
        <div className="contractor-signup__hero__inner">
          <div className="contractor-signup__hero__copy">
            <div className="contractor-signup__hero__logo">
              <img src={logoWhite} alt="Unety" />
            </div>
            <div className="contractor-signup__hero__title">{title}</div>
            {subtitle}
          </div>
          <div className="contractor-signup__hero__form">
            <div className="contractor-signup__hero__form__card">
              <ContractorSignUpForm />
            </div>
          </div>
        </div>
        <div className={styles.arrowWrapper}><i className="fas fa-arrow-down" /></div>
      </section>
    </>
  )
};

export default GenericHero;
