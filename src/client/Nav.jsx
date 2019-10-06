import React, { useState } from 'react';


const Nav = (props) => (
  <section className='nav-bar'>
    <button onClick={props.displayMenu}>
      Menu
    </button>
    <h1 className="nav-bar-heading">
      Best Foot Forward
    </h1>
  </section>
)

export default Nav;