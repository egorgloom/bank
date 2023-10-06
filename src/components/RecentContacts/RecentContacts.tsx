import { FC } from 'react';


import BtnDashed from '../UI/BtnDashed/BtnDashed';
import ButtonPurpleSmall from '../UI/ButtonPurpleSmall/ButtonPurpleSmall';

import { HiPlus } from 'react-icons/hi'

import './RecentContacts.scss'
import LastUser from '../LastUser/LastUser';

interface IRecentContacts { }

const RecentContacts: FC<IRecentContacts> = () => {
    return (
        <div className='recentContainer'>
            <div className='flex-between'>
                <span className='recent'>Recent Contacts</span>
                <ButtonPurpleSmall title='All Contacts' />
            </div>
            <div className='lastUsers'>
                <div>
                    <BtnDashed icon={<HiPlus />} title='Add' />
                </div>
                <div className='lastUserList'>
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                   <LastUser />
                </div>
            </div>

        </div>
    );
};

export default RecentContacts;