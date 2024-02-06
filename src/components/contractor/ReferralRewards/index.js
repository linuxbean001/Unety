import React from 'react';
import styles from './styles.module.scss';

const ReferralRewards = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.well}>
        <div className="contractor-signup__tools__title">
          <span>Referral rewards</span>
          Earn up to $5,000 each time you refer a contractor to this program
        </div>
        <div className="contractor-signup__tools">
          <p>You will receive a cash reward each time you refer a new contractor to us that results in a project being financed on the Unety platform. Cash rewards will be calculated in $100 increments based on the project cost that is financed, enabling you to receive $100 for every $100,000 in project cost, up to $5,000.</p>
        </div>
        <div className={styles.logos}>
          <i className="fas fa-hand-holding-usd" />
        </div>
      </div>
    </div>
  )
};

export default ReferralRewards;
