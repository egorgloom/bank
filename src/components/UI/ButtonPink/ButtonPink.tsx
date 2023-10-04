import React, { FC } from 'react';
import './ButtonPink.scss';

interface IButtonPink {
    children?: React.ReactNode,
    title: string,
    icon?: React.ReactNode,
}

const ButtonPink: FC<IButtonPink> = ({children, title, icon}) => {
  return (
    <button type="button" className="buttonPink">
        {children}{title}<span className='icon'>{icon}</span>
    </button>
  );
};

export default ButtonPink;