import React from 'react';
import styles from './styles.module.scss';

const EarnMoneyWithUnety = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.well}>
        <div className="contractor-signup__tools__title">
          <span>Earn money with Unety</span>
          Receive up to $50,000 per project and $5,000 per referral
        </div>
        <div className="contractor-signup__tools">
          <p>Unety believes that contractors deserve to get paid for helping their clients secure funding for projects. We want to make that possible, so we share our fees with you.</p>
        </div>
        <div className={styles.logos}>
          <i className="fas fa-hand-holding-usd" />
        </div>
      </div>
    </div>
  )
};

export default EarnMoneyWithUnety;
