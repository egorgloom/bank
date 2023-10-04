import { FC } from 'react';

import './ButtonLightGrey.scss'

interface IButtonLightGrey {
    children?: React.ReactNode,
    title?: string,
    element?: string,
    icon?: React.ReactNode,
}

const ButtonLightGrey: FC<IButtonLightGrey> = ({children, title, icon}) => {
  return (
    <button className='btnLightGrey'>
        {children}
        {title}
        <span>{icon}</span>
    </button>
  );
};

export default ButtonLightGrey;