import React from 'react';
import LandingPage from 'components/layouts/LandingPage';
import ContractorTools from 'components/contractor/ContractorTools';
import ContractorsNeededEcoAmerica from 'components/contractor/ContractorsNeededEcoAmerica';
import Footer from 'components/contractor/Footer';
import GenericHero from 'components/contractor/GenericHero';
import GenericTwoColumnCta from 'components/contractor/GenericTwoColumnCta';
import ProfessionalEnterpriseComparison from 'components/contractor/ProfessionalEnterpriseComparison';
import NeedFundingProjectTypes from 'components/contractor/NeedFundingProjectTypes';

import yahooFinanceSrc from '../../images/contractor/yahoo-finance.jpg';
import marketWatchSrc from '../../images/contractor/market-watch.png';
import cisionSrc from '../../images/contractor/cision.png';

import styles from './c5v1.module.scss';

const C5V1 = () => {
  return (
    <LandingPage>
      <div className="contractor-signup">
        <GenericHero version="ecoAmerica" />
        <ContractorsNeededEcoAmerica
          body={(
            <>
              <p>Earlier this year we <a href="https://unety.io/articles/unety-partners-with-ecoamerica" target="_blank" rel="noopener noreferrer">announced the launch of our nationwide program with ecoAmerica</a> where Unety serves as the technology backbone for ecoAmerica's Blessed Tomorrow program.</p>
              <div className={styles.logos}>
                <img src={yahooFinanceSrc} alt="Yahoo Finance logo" />
                <img src={marketWatchSrc} alt="Market Watch logo" />
                <img src={cisionSrc} alt="Cision logo" />
              </div>
              <p>By participating in this free program, you will be introduced to the property owners in your area who are seeking contractors to help them upgrade and repair their properties. Projects range in size from $50,000 up to $10 million and include roof replacements, all types of energy system upgrades, renewable energy installations, and more.</p>
            </>
          )}
          logos={['ecoAmerica', 'blessedTomorrow']}
        />

        <ProfessionalEnterpriseComparison
          title="More options, less time"
          text={(
            <p>
              Unety is your first stop for finding new project opportunities and funding resources to help your clients get projects started faster. As a Unety user who delivers projects, you will be assigned one of three user statuses: Limited, Pro, or Super Pro. Read more about <a href="https://app.unety.io/tiers" target="_blank" rel="noopener noreferrer">our user tiers here.</a>
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

export default C5V1;
