import React from 'react';

const Menu = ({ changeViewToSelectProfile, hideMenu }) => {
  const browseProfiles = () => {
    changeViewToSelectProfile();
    hideMenu();
  };

  return (
    <div className='menu'>
      <section className='menu__container'>
        <div className='menu__button' tabIndex='1' onClick={browseProfiles}>
          Browse Profiles
        </div>
      </section>
      <div className='menu__dismiss' onClick={hideMenu} />
    </div>
  );
};

export default Menu;
