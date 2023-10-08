import { FC } from 'react';

import styles from './Sidebar.module.scss';

import { FaWallet } from 'react-icons/fa'
import { RxBorderDotted } from 'react-icons/rx'
import { BiLockOpen } from 'react-icons/bi'
import { BiEditAlt } from 'react-icons/bi'
import { HiMinus, HiPlus } from 'react-icons/hi'


import Button from '../UI/Button/Button';


import Card from '../Card/Card';
import BtnSidebar from './../UI/BtnSidebar/BtnSidebar';




interface ISidebar {

 }

const Sidebar: FC<ISidebar> = () => {
    return (
        <>
            <div className={styles.sidebarContainer}>
                <div className='flex-between'>
                    <span className={styles.cards}>Cards</span>
                    <Button title='Show All' color='smallPurple'/>
                </div>
                <Card />
                <ul className={styles.sidebarOptions}>
                    <li>
                        <BtnSidebar 
                        title='Show Card Details' 
                        icon={<FaWallet/>}/>
                    </li>
                    <li>
                        <BtnSidebar 
                        title='Your PIN' 
                        icon={<RxBorderDotted/>}/>
                    </li>
                    <li>
                        <BtnSidebar 
                        title='Security Code' 
                        icon={<BiLockOpen/>}/>
                    </li>
                    <li>
                        <BtnSidebar 
                        title='Edit Limits' 
                        icon={<BiEditAlt/>}/>

                    </li>
                </ul>
                <div className={styles.buttons}>
                    <Button title='Add Card' icon={<HiPlus />} color='purple'/>
                    <Button title='Remove' icon={<HiMinus />} color='pink'/>
                </div>
            </div>

        </>


    );
};

export default Sidebar;