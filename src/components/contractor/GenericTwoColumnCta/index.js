import React from 'react';
import ContractorSignUpForm from 'components/form/ContractorSignUpForm';

const DEFAULT_SUBTITLE = 'We are looking for contractors to support ecoAmerica’s Blessed Tomorrow program. Get free access to thousands of exclusive leads for commercial projects of all types from $50,000 to $10 million.';

const GenericTwoColumnCta = ({ subtitle: passedSubtitle }) => {
  const subtitle = passedSubtitle || DEFAULT_SUBTITLE;

  return (
    <section id="dont-wait" className="contractor-signup__dont-wait">
      <div className="contractor-signup__dont-wait__inner">
        <div className="contractor-signup__dont-wait__copy">
          <div className="contractor-signup__dont-wait__title">Don't wait,<br />get started today.</div>
          <p>{subtitle}</p>
        </div>
        <div className="contractor-signup__dont-wait__form">
          <div className="contractor-signup__dont-wait__form__card">
            <ContractorSignUpForm />
          </div>
        </div>
      </div>
    </section>
  )
};

export default GenericTwoColumnCta;
