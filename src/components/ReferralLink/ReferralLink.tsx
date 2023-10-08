import { FC } from 'react';

import styles from'./ReferralLink.module.scss';

import { IoIosCopy } from 'react-icons/io';

interface IReferralLink {}

const ReferralLink: FC<IReferralLink> = () => {
  return (
    <div className={styles.referralContainer}>
      <p>Invite a friend with code below and redeem special bonus USD 15 from us!</p>
      <div className={styles.referralLink}>
        <a href="" target="_blank" rel="nofollow">
          <span>EgorOrlov-OCT23</span>
          <div>
            <IoIosCopy />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ReferralLink;