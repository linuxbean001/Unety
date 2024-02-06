import React, { useState } from "react"
import Img from 'gatsby-image';
import { AngellistIcon, LinkedinIcon } from '../../../components/icons';

import styles from './styles.module.scss';

const TeamMember = (props) => {
  const [showBio, setShowBio] = useState(false);

  const {
    name,
    title,
    bio,
    headshotUrl,
    angelListUrl,
    linkedInUrl,
  } = props;

  return (
    <div className={styles.item}>
      {!showBio ? (
        <div className={styles.itemInfo}>
          <div className={styles.itemImage}>
            <Img fluid={headshotUrl} />
          </div>
          <div className={styles.itemName}>
            <div>{name}</div>
            <span>{title}</span>
            <span className={styles.readBio} onClick={() => setShowBio(true)}><i>read bio</i></span>
          </div>
          <div className={styles.itemSocial}>
            <a
              href={angelListUrl}
              rel="noreferrer noopener"
              target="_blank"
            >
              <AngellistIcon />
            </a>
            <a
              href={linkedInUrl}
              rel="noreferrer noopener"
              target="_blank"
            >
              <LinkedinIcon fill="#993333" />
            </a>
          </div>
        </div>
      ) : (
        <div className={styles.itemContent}>
          <div className={styles.itemBio}>
            <p>{bio}</p>
            <div className={styles.readBio} onClick={() => setShowBio(false)}><i>close</i></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMember;
