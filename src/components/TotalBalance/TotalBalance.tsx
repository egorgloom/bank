import { FC } from 'react';

import './TotalBalance.scss'

import ButtonPurple from '../UI/ButtonPurple/ButtonPurple';
import ButtonLightGrey from '../UI/ButtonLightGrey/ButtonLightGrey';

import { HiArrowDown, HiArrowUp } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi'



interface IBalance {

}

const Balance: FC<IBalance> = () => {

  let number = 29475

  const val = Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(number);

  return (
    <div className='balanceContainer'>
        <span className='title'>Total Balance</span>
        <div className='balance'>
            {val} <span className='currency'>USD</span>
        </div>
        <div className='btnBlock'>
            <ButtonPurple title='Send' icon={<HiArrowUp/>}/>
            <ButtonLightGrey title='Request' icon={<HiArrowDown/>}/>
            <ButtonLightGrey title='Top Up' icon={<HiPlus />}/>
        </div>
    </div>
  );
};

export default Balance;