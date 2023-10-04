import LOGO from '../../assets/logo.svg';

import './Header.scss'

import User from '../User/User';

import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div className='header'>
      <Link to={'/home'}>
        <img src={LOGO} alt="logo" className="logo" />
      </Link>
      <User />
    </div>
  );
};

export default Header;