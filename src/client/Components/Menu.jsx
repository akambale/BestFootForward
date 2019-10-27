import React from 'react';
import { Link } from '@reach/router';

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
      </div>
      <div className='menu__dismiss' onClick={hideMenu} />
    </div>
  );
};

export default Menu;
