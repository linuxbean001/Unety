import React from 'react';
import LandingPage from 'components/layouts/LandingPage';
import ContractorTools from 'components/contractor/ContractorTools';
import Footer from 'components/contractor/Footer';
import GenericHero from 'components/contractor/GenericHero';
import GenericTwoColumnCta from 'components/contractor/GenericTwoColumnCta';
import NeedFundingProjectTypes from 'components/contractor/NeedFundingProjectTypes';
import ContractorsNeededEcoAmerica from 'components/contractor/ContractorsNeededEcoAmerica';
import ReferralRewards from 'components/contractor/ReferralRewards';

const C2V3 = () => {
  return (
    <LandingPage>
      <div className="contractor-signup">
        <GenericHero version="ecoAmerica" />
        <ContractorsNeededEcoAmerica
          body={(
            <>
              <p>ecoAmerica is the largest nonprofit association of faith-based organizations in the country, representing over 87,000 houses of worship as members of the Blessed Tomorrow program. Members in the Blessed Tomorrow program have made aggressive commitments to reduce greenhouse gas emissions.</p>
              <p>By participating in this free program, you will be introduced to the property owners in your area who are seeking contractors to help them upgrade and repair their properties. Projects range in size from $50,000 up to $10 million and include roof replacements, all types of energy system upgrades, renewable energy installations, and more.</p>
              <p>Unety is the exclusive technology partner for ecoAmerica’s Blessed Tomorrow program. We are supported by the National Energy Improvement Fund (NEIF).</p>
            </>
          )}
          logos={['ecoAmerica', 'blessedTomorrow', 'neif']}
        />
        <ContractorTools version="ecoAmerica" tools={['leads', 'reportsV2', 'screeningV1', 'fundingV2']} />
        <NeedFundingProjectTypes />
        <ReferralRewards />
        <GenericTwoColumnCta
          subtitle="We are looking for contractors to support a wide variety of commercial building projects ranging from $50k to $10mm, including rooftop replacements, major HVAC repairs, renewable energy installations, and energy efficiency projects."
        />
        <Footer />
      </div>
    </LandingPage>
  )
};

export default C2V3;
