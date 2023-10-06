import React, { FC } from 'react';

import './ButtonPurple.scss';

interface IButtonPurple {
    children?: React.ReactNode,
    title: string,
    icon?: React.ReactNode,
}

const ButtonPurple: FC<IButtonPurple> = ({children, title, icon}) => {
  return (
    <button type="button" className="ButtonPurple">
        {children}
        {title}<span>{icon}</span>
    </button>
  );
};

export default ButtonPurple;