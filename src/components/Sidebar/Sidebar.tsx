import { FC } from 'react';

import './Sidebar.scss';

import { FaWallet } from 'react-icons/fa'
import { RxBorderDotted } from 'react-icons/rx'
import { BiLockOpen } from 'react-icons/bi'
import { BiEditAlt } from 'react-icons/bi'
import { HiMinus, HiPlus } from 'react-icons/hi'


import ButtonPurple from '../UI/ButtonPurple/ButtonPurple';
import ButtonPink from '../UI/ButtonPink/ButtonPink';

import Card from '../Card/Card';
import BtnSidebar from './../UI/BtnSidebar/BtnSidebar';



interface ISidebar {

 }

const Sidebar: FC<ISidebar> = () => {
    return (
        <>
            <div className="sidebarContainer">
                <div className='flex-between'>
                    <span className="cards">Cards</span>
                    <span className="showAll">Show all</span>
                </div>
                <Card />
                <ul className="sidebarOptions">
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
                <div className='buttons'>
                    <ButtonPurple title='Add Card' icon={<HiPlus />}/>
                    <ButtonPink title='Remove' icon={<HiMinus />}/>
                </div>
            </div>

        </>


    );
};

export default Sidebar;