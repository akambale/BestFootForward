import React from 'react';

const Menu = (props) => (
  <div className='menu'>
    <section className='menu-container'>
      <button onClick={changeViewSelectProfile}>Browse Profiles</button>
      <button>About</button>
    </section>
    <div className='menu-dismiss' onClick={props.hideMenu} />
  </div>
);

export default Menu;