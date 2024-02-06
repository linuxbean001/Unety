import React from 'react';
import styles from './styles.module.scss';

import logoEcoAmerica from 'images/eco-america/logo-eco-america.png';
import logoBlessedTomorrow from 'images/eco-america/logo-blessed-tomorrow.png';
import logoNeif from 'images/lender-logos/neif-logo.png';

const LOGOS = {
  'ecoAmerica': <img key="ecoAmerica" src={logoEcoAmerica} alt="ecoAmerica logo" />,
  'blessedTomorrow': <img key="blessedTomorrow" src={logoBlessedTomorrow} alt="blessed tomorrow logo" />,
  'neif': <img key="neif" src={logoNeif} alt="neif logo" />
};

const ContractorsNeededEcoAmerica = ({ body, logos }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.well}>
        <div className="contractor-signup__tools__title">
          <span>Contractors Needed</span>
          ecoAmerica portfolio seeks solutions to upgrade buildings
        </div>
        <div className="contractor-signup__tools">
          {body}
        </div>
        <div className={styles.logos}>
          {logos.map((logoKey) => LOGOS[logoKey])}
        </div>
      </div>
    </div>
  )
};

export default ContractorsNeededEcoAmerica;
