import React, { useState } from 'react';
import Button from './LibraryComponents/Button.jsx';
import { Link } from '@reach/router';
import Menu from './Menu.jsx';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header>
      <nav className='nav-bar'>
        <Button className='nav-bar__menu-button lib__btn' onClick={toggleMenu}>
          <div className='nav-bar__menu-button__icon' />
        </Button>
        <Link
          className='nav-bar__menu-button lib__btn'
          to='/'
          onClick={showMenu ? toggleMenu : null}
        >
          <svg
            className='cards'
            style={{ fill: 'white', height: '50%', width: '3rem' }}
            viewBox='0 0 318.717 318.717'
          >
            <g>
              <g>
                <path
                  d='M28.709,31.769C12.877,31.769,0,44.649,0,60.478V203.92c0,15.835,12.883,28.709,28.709,28.709h9.206V114.797
			c0-22.617,18.398-41.007,41.006-41.007h189.577V60.483c0-15.834-12.886-28.709-28.709-28.709H28.709V31.769z'
                ></path>
                <path
                  d='M78.927,86.088c-15.832,0-28.709,12.88-28.709,28.709v143.442c0,15.835,12.883,28.709,28.709,28.709h211.081
			c15.828,0,28.709-12.886,28.709-28.709V114.797c0-15.834-12.881-28.709-28.709-28.709H78.927z'
                ></path>
              </g>
            </g>
          </svg>
        </Link>
        <Link
          className='nav-bar__menu-button lib__btn'
          to='home'
          onClick={showMenu ? toggleMenu : null}
        >
          <svg
            viewBox='0 0 24 24'
            height='50%'
            style={{ fill: 'white' }}
            aria-hidden='true'
            role='presentation'
          >
            <g stroke='none'>
              <path d='M16.085 13.026c1.285-.975 2.088-2.625 2.088-5.55 0-3-2.65-5.476-5.861-5.476C9.1 2 6.45 4.4 6.45 7.475c0 3 .803 4.726 2.168 5.7-2.73 1.576-5.38 4.576-4.416 6.076 2.007 3.525 15.095 3.75 16.7.15.643-1.725-2.006-4.65-4.817-6.375'></path>
            </g>
          </svg>
        </Link>
      </nav>
      {showMenu ? <Menu toggleMenu={toggleMenu} /> : null}
    </header>
  );
};

export default Nav;
