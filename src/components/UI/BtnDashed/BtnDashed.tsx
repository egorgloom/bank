import React, { FC } from 'react';

import './BtnDashed.scss'

interface IBtnDashed {
    children?: React.ReactNode,
    title?: string,
    icon?: React.ReactNode,

}

const BtnDashed: FC<IBtnDashed> = ({ children, icon, title }) => {
    return (
        <div className='btnDashedContainer'>
            <button className='btnDashed'>
                {children}
                {icon}
            </button>
            {title}
        </div>
    );
};

export default BtnDashed;