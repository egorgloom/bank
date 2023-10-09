import { FC } from 'react';

import styles from './TransactionsHistory.module.scss';
import UserHistory from './../UserHistory/UserHistory';

import { HiOutlineCalendarDays } from 'react-icons/hi2';
import Button from '../UI/Button/Button';
import BtnCircle from '../UI/BtnCircle/BtnCircle';


interface ITransactionsHistory { }

const TransactionsHistory: FC<ITransactionsHistory> = () => {
    return (
        <div className={styles.transactionContainer}>
            <div className={styles.block}>
                <span className={styles.title}>Transactions History</span>
                <div className='flex'>
                    <BtnCircle icon={<HiOutlineCalendarDays />} title='Select Date Range' color='lightGray'/>
                    {/* <div className={styles.referralLink}>
                            <span>Select Date Range</span>
                            <BtnCircle icon={<HiOutlineCalendarDays />}/>
                    </div> */}
                    {/* <Button color='purple' title='>' /> */}
                    {/* <button className='btna'>
                        a hhh hh
                    </button> */}
                </div>
            </div>

            <div className={styles.blockHistory}>
                <UserHistory />
                <UserHistory />
                <UserHistory />
            </div>
        </div>
    );
};

export default TransactionsHistory;