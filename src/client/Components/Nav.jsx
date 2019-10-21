import React, { useState } from 'react';


const Nav = (props) => (
  <section className='nav-bar'>
    <button className='nav-bar-menu-button' onClick={props.displayMenu}>
      <div className='nav-bar-menu-button-icon' />
    </button>
    <h1 className="nav-bar-heading">
      Best Foot Forward
    </h1>
  </section>
)

export default Nav;