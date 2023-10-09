import { clsx } from 'clsx';

import React, { FC } from 'react';

import styles from './BtnDashed.module.scss';


interface IBtnDashed {
    children?: React.ReactNode,
    title?: string,
    icon?: React.ReactNode,
    color: 'black' | 'dashed',

}

const BtnDashed: FC<IBtnDashed> = ({ color, children, ...props}) => {

    const colorTheme = {
    dashed: styles.btnDashed,
    black: styles.black,
}
    return (
        <div className={styles.btnDashedContainer}>
            <button className={clsx(styles.btnDashed, colorTheme[color])} {...props}>
                {children}
                {props.icon}
            </button>
            {props.title}
        </div>
    );
};

export default BtnDashed;