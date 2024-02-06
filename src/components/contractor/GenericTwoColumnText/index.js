import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const GenericTwoColumnText = (props) => {
  const {
    items,
  } = props;

  const [{
    title: firstTitle,
    text: firstText,
  }, {
    title: secondTitle,
    text: secondText,
  }] = items;

  return (
    <div className={styles.layout}>
      <div className={styles.well}>
        <div className={classnames('contractor-signup__tools', styles.grid)}>
          <div>
            <h3 className="contractor-signup__tools__item__title">{firstTitle}</h3>
            <p className="contractor-signup__tools__item__copy">{firstText}</p>
          </div>
          <div>
            <h3 className="contractor-signup__tools__item__title">{secondTitle}</h3>
            <p className="contractor-signup__tools__item__copy">{secondText}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default GenericTwoColumnText;
