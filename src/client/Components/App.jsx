import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SelectProfile from './ProfileSelectionComponents/SelectProfile.jsx';
import RateProfile from './RatingComponents/RateProfile.jsx';
import RatingResultsTable from './ResultsTableComponents/RatingResultsTable.jsx';
import Nav from './Nav.jsx';
import Menu from './Menu.jsx';
import About from './About.jsx';
import Deck from './Deck.jsx';
import { Router } from '@reach/router';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const displayMenu = () => setShowMenu(true);
  const hideMenu = () => setShowMenu(false);

  return (
    <div className='app'>
      {showMenu ? <Menu hideMenu={hideMenu} /> : null}
      <Nav displayMenu={displayMenu} />
      <Router>
        <SelectProfile path='/' />
        <RateProfile path='rateprofile/:userID' />
        <RatingResultsTable path='results/:userID' />
        <About path='about' />
        <Deck path='deck' />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
