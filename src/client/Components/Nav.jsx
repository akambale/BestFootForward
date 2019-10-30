import React from 'react';
import Button from './GeneralComponents/Button.jsx';

const Nav = props => (
  <nav className='nav-bar'>
    <Button className='nav-bar__menu-button util__btn' onClick={props.displayMenu}>
      <div className='nav-bar__menu-button__icon' />
    </Button>
    <h1 className='nav-bar__heading'>Best Foot Forward</h1>
  </nav>
);

export default Nav;
