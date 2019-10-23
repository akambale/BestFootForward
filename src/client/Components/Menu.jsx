import React from 'react';

const Menu = ({ changeViewToSelectProfile, hideMenu, changeViewToAbout }) => {
  const browseProfiles = () => {
    changeViewToSelectProfile();
    hideMenu();
  };

  const about = () => {
    changeViewToAbout();
    hideMenu();
  };

  return (
    <div className='menu'>
      <section className='menu__container'>
        <div className='menu__button' tabIndex='1' onClick={browseProfiles}>
          Browse Profiles
        </div>
        <div className='menu__button' tabIndex='1' onClick={about}>
          About
        </div>
      </section>
      <div className='menu__dismiss' onClick={hideMenu} />
    </div>
  );
};

export default Menu;
