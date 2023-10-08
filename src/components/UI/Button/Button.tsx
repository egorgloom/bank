import { clsx } from 'clsx';

import React, { FC } from 'react';

import styles from './Button.module.scss';


interface IButton  {
    children?: React.ReactNode,
    title: string,
    icon?: React.ReactNode,
    // style? : React.CSSProperties,
    color : 'purple' | 'pink' | 'gray' | 'smallPurple',

}

const Button: FC<IButton> = ({color, children, ...props}) => {

  const colorTheme = {
    pink: styles.pink,
    purple: styles.purple,
    gray: styles.gray,
    smallPurple: styles.smallPurple,
  }




  return (
    <button {...props} className={clsx(styles.ButtonPurple, colorTheme[color])}>
        {children}
        <p >{props.title}</p> <span>{props.icon}</span>
    </button>
  );
};

export default Button;