import React from 'react';

const Menu = ({changeViewToSelectProfile, hideMenu}) => (
  <div className='menu'>
    <section className='menu-container'>
      <button onClick={changeViewToSelectProfile}>Browse Profiles</button>
      <button>About</button>
    </section>
    <div className='menu-dismiss' onClick={hideMenu} />
  </div>
);

export default Menu;