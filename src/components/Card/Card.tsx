import { FC } from 'react';

import './Card.scss'

interface ICard { }

const Card: FC<ICard> = () => {
    return (
        <>
            <div className="block">
                <div className="card">
                    <div className='flex'>
                        <span className="userName">Orlov Egor</span>
                        <span className="mastercardIcon">
                        </span>
                    </div>
                    <div className='flex'>
                        <input type="number" placeholder='1234 5678 9012' disabled
                            className="numberCard"
                        />
                        <div className="cvvDiv">
                            <input type="number" placeholder='CVV' disabled
                                className="cvv" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;