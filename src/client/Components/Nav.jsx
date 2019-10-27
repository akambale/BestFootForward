import React from 'react';

const Nav = props => (
  <nav className='nav-bar'>
    <div className='nav-bar__menu-button' onClick={props.displayMenu} tabIndex='1'>
      <div className='nav-bar__menu-button__icon' />
    </div>
    <h1 className='nav-bar__heading'>Best Foot Forward</h1>
  </nav>
);

export default Nav;
