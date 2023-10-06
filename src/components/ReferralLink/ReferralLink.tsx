import { FC } from 'react';
// import PEOPLE from '../../assets/people.png';

import './ReferralLink.scss'
import { IoIosCopy } from 'react-icons/io';

interface IReferralLink {}

const ReferralLink: FC<IReferralLink> = () => {
  return (
    <div className='referralContainer'>
      <p>Invite a friend with code below and redeem special bonus USD 15 from us!</p>
      <div className='referralLink'>
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