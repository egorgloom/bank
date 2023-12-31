import { FC } from 'react';

import styles from'./ReferralLink.module.scss';

import { IoIosCopy } from 'react-icons/io';
import BtnCircle from '../UI/BtnCircle/BtnCircle';

interface IReferralLink {}

const ReferralLink: FC<IReferralLink> = () => {
  return (
    <div className={styles.referralContainer}>
      <p>Invite a friend with code below and redeem special bonus USD 15 from us!</p>
      <BtnCircle icon={ <IoIosCopy />} title='EGORORLOV-OCT2023' color='darkGrey'/>
    </div>
  );
};

export default ReferralLink;