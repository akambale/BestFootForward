import { Link } from '@reach/router';
import React from 'react';

const Menu = ({ hideMenu }) => {
  return (
    <div className='menu'>
      <div className='menu__container'>
        <Link className='menu__button' to='/' onClick={hideMenu}>
          Browse Profiles
        </Link>
        <Link className='menu__button' to='about' onClick={hideMenu}>
          About
        </Link>
        <Link className='menu__button' to='deck' onClick={hideMenu}>
          Deck
        </Link>
        <Link className='menu__button' to='login' onClick={hideMenu}>
          LogIn/SignUp
        </Link>
      </div>
      <div className='menu__dismiss' onClick={hideMenu} />
    </div>
  );
};

export default Menu;
