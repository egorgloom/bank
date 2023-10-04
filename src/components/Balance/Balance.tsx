import { FC } from 'react';

import './Balance.scss'

import ButtonPurple from './../UI/ButtonPurple/ButtonPurple';
import ButtonLightGrey from '../UI/ButtonLightGrey/ButtonLightGrey';

import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';



interface IBalance {}

const Balance: FC<IBalance> = () => {
  return (
    <div className='balanceContainer'>
        <span className='title'>Total Balance</span>
        <div className='balance'>
        {/* <CurrencyFormat thousandSeparator={true} prefix={'$'} /> */}
            29,475.00 <span className='currency'>USD</span>
        </div>
        <div className='btnBlock'>
            <ButtonPurple title='Send' icon={<FaArrowUp/>}/>
            <ButtonLightGrey title='Request' icon={<FaArrowDown/>}/>
            <ButtonLightGrey title='Top Up +'/>
        </div>
    </div>
  );
};

export default Balance;