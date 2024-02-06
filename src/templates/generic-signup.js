import React from 'react';
import GenericSignUpForm from 'components/form/GenericSignUpForm';
import heroVideoWebm from "../videos/homepage.webm"
import heroVideoMp4 from "../videos/homepage.mp4"
import logoWhite from '../images/logo-white.png';
import logoColor from '../images/logo-color.png';

import './generic-signup.scss';
import { LinkedinIcon } from "../components/icons"

const Benefit = ({ title, description }) => {

  return (
    <div className="generic-signup__benefit">
      <div className="generic-signup__benefit__title">{title}</div>
      <div className="generic-signup__benefit__description">{description}</div>
    </div>
  );
};

const GenericSignup = () => {
  const handleFormSubmit = (values) => {
    console.log('VALUES', values);
  }

  return (
    <div className="generic-signup">
      <div className="generic-signup__background">
        <video autoPlay loop muted playsInline className="up-homepage__hero__video" preload="metadata">
          <source type="video/webm" src={`${heroVideoWebm}#t=0.1`} />
          <source type="video/mp4" src={`${heroVideoMp4}#t=0.1`} />
        </video>
      </div>

      <section className="generic-signup__hero">
        <div className="generic-signup__hero__inner">
          <div className="generic-signup__hero__copy">
            <div className="generic-signup__hero__logo">
              <img src={logoWhite} alt="Unety" />
            </div>
            <div className="generic-signup__hero__title">
              Exclusive access to commercial projects
            </div>
            <div>
              <Benefit
                title="Lenders - Fund a project"
                description="Ready to provide funding for energy improvement projects? Search and compare projects."
              />
              <Benefit
                title="Contractors - Find financing"
                description="Ready to explore financing options for your energy improvement project? Search and compare options."
              />
              <Benefit
                title="Property owners - Find a contractor"
                description="Want to find a contractor for your energy efficiency project? Search for participating contractors."
              />
            </div>
          </div>
          <div className="generic-signup__hero__form">
            <div className="generic-signup__hero__form__card">
              <GenericSignUpForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </section>

      <footer className="generic-signup__footer">
        <div className="generic-signup__footer__inner">
          <div className="generic-signup__footer__logo">
            <img src={logoColor} alt="unety" />
          </div>
          <div className="generic-signup__footer__copy">
            <span>&copy; {new Date().getFullYear()} Unety All rights reserved</span>
            <a href="https://www.linkedin.com/company/unety-io" rel="noopener noreferrer" target="_blank">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
};

export default GenericSignup
