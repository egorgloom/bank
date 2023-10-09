import { FC } from 'react';

import styles from './UserHistory.module.scss'

interface IUserHistory { }

const UserHistory: FC<IUserHistory> = () => {
    return (
        <div className={styles.userBlock}>
            <div className={styles.user}>
                <span>AS</span>
            </div>
            <div className={styles.info}>
                <span className={styles.first}>Alina Sooela</span>
                <span className={styles.second}>Sent: Meal Bills</span>
            </div>
            <div className={styles.info}>
                <span className={styles.first}>Wed. 27 September 2023</span>
                <span className={styles.second}>1:05 PM</span>
            </div>
            <div className={styles.sumBlock}>
                <span className={styles.usd}>USD</span>
                <span className={styles.sum}>275.00</span>
            </div>
        </div>
    );
};

export default UserHistory;