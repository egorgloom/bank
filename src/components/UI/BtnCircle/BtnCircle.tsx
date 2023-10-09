import { FC } from 'react';

import { clsx } from 'clsx';

import styles from './BtnCircle.module.scss'

interface IBtnCircle {
    children?: React.ReactNode,
    icon?: React.ReactNode,
    title?: string,
    color: 'darkGrey' | 'lightGray',

}

const BtnCircle: FC<IBtnCircle> = ({ color, children, ...props }) => {

    const colorTheme = {
        darkGrey: styles.darkGrey,
        lightGray: styles.lightGray,
    }
    return (
        <div className={clsx(styles.btnContainer, colorTheme[color])}>
            <span>{props.title}</span>
            <button className={styles.btnCircle} {...props}>
                {children}
                {props.icon}
            </button>
        </div>
    );
};

export default BtnCircle;