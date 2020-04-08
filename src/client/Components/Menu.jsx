import { Link } from '@reach/router';
import React from 'react';
import { useTransition, animated } from 'react-spring';

const Menu = ({ toggleMenu, showMenu }) => {
  const menuStyle = useTransition(showMenu, null, {
    from: { height: '0%' },
    enter: { height: '45%' },
    leave: { height: '0%' },
  });
  const dismissStyle = useTransition(showMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
  });
  return (
    <div className='menu'>
      {/* <animated.div className='menu__container' style={menuStyle[0].props} key={menuStyle[0].key}>
        <Link className='menu__button' to='/' onClick={toggleMenu}>
          Browse Profiles
        </Link>
        <Link className='menu__button' to='about' onClick={toggleMenu}>
          About
        </Link>
        <Link className='menu__button' to='login' onClick={toggleMenu}>
          LogIn/SignUp
        </Link>
        <Link className='menu__button' to='home' onClick={toggleMenu}>
          Your Profile
        </Link>
      </animated.div>
      <animated.div
        className='menu__dismiss'
        onClick={toggleMenu}
        style={dismissStyle[0].props}
        key={dismissStyle[0].key}
      /> */}
    </div>
  );
};

export default Menu;
