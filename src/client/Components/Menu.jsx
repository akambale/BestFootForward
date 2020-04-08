import { Link } from '@reach/router';
import React from 'react';

const Menu = ({ toggleMenu }) => {
  return (
    <div className='menu'>
      <div className='menu__container'>
        <Link className='menu__button' to='/' onClick={toggleMenu}>
          Rate Profiles
        </Link>
        <Link className='menu__button' to='about' onClick={toggleMenu}>
          About
        </Link>
        <Link className='menu__button' to='login' onClick={toggleMenu}>
          LogIn/SignUp
        </Link>
        <Link className='menu__button' to='home' onClick={toggleMenu}>
          Your Profile
        </Link>
      </div>
      <div className='menu__dismiss' onClick={toggleMenu} />
    </div>
  );
};

export default Menu;
