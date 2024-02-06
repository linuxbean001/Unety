import React from 'react';
import LandingPage from 'components/layouts/LandingPage';
import ContractorTools from 'components/contractor/ContractorTools';
import Footer from 'components/contractor/Footer';
import GenericHero from 'components/contractor/GenericHero';
import GenericTwoColumnCta from 'components/contractor/GenericTwoColumnCta';
import NeedFundingProjectTypes from 'components/contractor/NeedFundingProjectTypes';
import ContractorsNeededEcoAmerica from 'components/contractor/ContractorsNeededEcoAmerica';

const C2V1 = () => {
  return (
    <LandingPage>
      <div className="contractor-signup">
        <GenericHero
          version="ecoAmerica"
          subtitle="Get free access to thousands of exclusive leads for commercial projects of all types from $5,000 to $2 million."
        />
        <ContractorsNeededEcoAmerica
          body={(
            <>
              <p>ecoAmerica is the largest nonprofit association of faith-based organizations in the country, representing over 87,000 houses of worship as members of the Blessed Tomorrow program. Unety is the exclusive technology partner for ecoAmerica’s Blessed Tomorrow program. Members in the Blessed Tomorrow program have made aggressive commitments to reduce greenhouse gas emissions.</p>
              <p>By participating in this free program, you will be introduced to the property owners in your area who are seeking contractors to help them upgrade and repair their properties. Projects range in size from $5,000 up to $2 million and include roof replacements, all types of energy system upgrades, renewable energy installations, and more.</p>
            </>
          )}
          logos={['ecoAmerica', 'blessedTomorrow']}
        />
        <ContractorTools version="ecoAmerica" tools={['leadsV2', 'fundingV1', 'reportsV1']} />
        <NeedFundingProjectTypes />
        <GenericTwoColumnCta
          subtitle="We are looking for contractors to support ecoAmerica’s Blessed Tomorrow program. Get free access to thousands of exclusive leads for commercial projects of all types from $5,000 to $2 million."
        />
        <Footer />
      </div>
    </LandingPage>
  )
};

export default C2V1;
