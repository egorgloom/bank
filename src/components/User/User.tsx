import { FC } from 'react';

import USER from '../../assets/user.svg';

import'./User.scss'


interface IUser {}

const User: FC<IUser> = () => {
  return (
    <div className="userContainer">
        <h3>Welcome back, <span> Egor!</span></h3>
        <img src={USER} alt="userImage" className="userImage"/>
    </div>
  );
};

export default User;