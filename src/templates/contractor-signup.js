import React from 'react';
import ContractorTools from 'components/contractor/ContractorTools';
import Footer from 'components/contractor/Footer';
import GenericHero from 'components/contractor/GenericHero';
import GenericTwoColumnCta from 'components/contractor/GenericTwoColumnCta';
import NeedFundingProjectTypes from 'components/contractor/NeedFundingProjectTypes';

import './contractor-signup.scss';

const ContractorSignup = () => {
  return (
    <div className="contractor-signup">
      <GenericHero />
      <ContractorTools tools={['screening', 'funding', 'manage']} />
      <NeedFundingProjectTypes />
      <GenericTwoColumnCta />
      <Footer />
    </div>
  )
};

export default ContractorSignup;
