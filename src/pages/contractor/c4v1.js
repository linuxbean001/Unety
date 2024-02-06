import React from 'react';
import LandingPage from 'components/layouts/LandingPage';
import ContractorTools from 'components/contractor/ContractorTools';
import ContractorsNeededEcoAmerica from 'components/contractor/ContractorsNeededEcoAmerica';
import Footer from 'components/contractor/Footer';
import GenericHero from 'components/contractor/GenericHero';
import GenericTwoColumnCta from 'components/contractor/GenericTwoColumnCta';
import GenericTwoColumnText from 'components/contractor/GenericTwoColumnText';
import ProfessionalEnterpriseComparison from 'components/contractor/ProfessionalEnterpriseComparison';
import NeedFundingProjectTypes from 'components/contractor/NeedFundingProjectTypes';
import EarnMoneyWithUnety from 'components/contractor/EarnMoneyWithUnety';

const twoColumnItems = [{
  title: 'Fee sharing',
  text: 'Each time you use Unety to help fund a project, 50% of Unety’s fees will be passed to you, up to $50,000 per projects. There is no limit to the number of projects that qualify you to earn money.'
}, {
  title: 'Referral bonus',
  text: 'You will receive a cash reward each time you refer a new contractor to us that results in a project being financed on the Unety platform. Cash rewards will be calculated in $100 increments based on the project cost that is financed, up to $5,000.',
}];

const C4V1 = () => {
  return (
    <LandingPage>
      <div className="contractor-signup">
        <GenericHero version="ecoAmerica" />
        <ContractorsNeededEcoAmerica
          body={(
            <>
              <p>ecoAmerica is the largest nonprofit association of faith-based organizations in the country, representing over 87,000 houses of worship as members of the Blessed Tomorrow program. Members in the Blessed Tomorrow program have made aggressive commitments to reduce greenhouse gas emissions.</p>
              <p>By participating in this free program, you will be introduced to the property owners in your area who are seeking contractors to help them upgrade and repair their properties. Projects range in size from $50,000 up to $10 million and include roof replacements, all types of energy system upgrades, renewable energy installations, and more.</p>
            </>
          )}
          logos={['ecoAmerica', 'blessedTomorrow']}
        />

        <EarnMoneyWithUnety />
        <GenericTwoColumnText items={twoColumnItems} />

        <ProfessionalEnterpriseComparison
          title="Special offer: Super Pros get access to fee sharing"
          text={(
            <p>
              In celebration of Unety’s one year anniversary, Super Pro users with a free Professional account will get access to Fee Sharing. This feature is always and typically only available for Enterprise subscribers, however, users who become Super Pro before September 30, 2020 will have access to this special feature for all projects going forward. Become a Super Pro today! Read more about <a href="https://app.unety.io/tiers" target="_blank" rel="noopener noreferrer">our user tiers here</a>.
            </p>
          )}
        />

        <ContractorTools tools={['leadsV3', 'reportsV3', 'screeningV1', 'fundingV2']} />

        <NeedFundingProjectTypes />
        <GenericTwoColumnCta
          subtitle="We are looking for contractors to support a wide variety of commercial building projects ranging from $50k to $10mm, including rooftop replacements, major HVAC repairs, renewable energy installations, and energy efficiency projects."
        />
        <Footer />
      </div>
    </LandingPage>
  )
};

export default C4V1;
