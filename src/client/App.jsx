import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SelectProfile from './SelectProfile.jsx';
import RateProfile from './RateProfile.jsx';
import RatingTable from './RatingTable.jsx';
import Feedback from './Feedback.jsx';
import Nav from './Nav.jsx'
import Menu from './Menu.jsx'
import axios from 'axios';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [pageContent, setPageContent] = useState(null);

  const displayMenu = () => setShowMenu(true);
  const hideMenu = () => setShowMenu(false);
  
  const addUserCardsToDeck = id => setPageContent(<RateProfile userID={id} setPageContent={setPageContent} />);
  const selectProfileComponent = <SelectProfile addUserCardsToDeck={addUserCardsToDeck} showRatings={showRatings} />;
  
  const showRatings = () => setPageContent(<RatingTable userID={userIDBeingRated} />);
  const changeViewToSelectProfile = () => setPageContent(selectProfileComponent);

  if (!pageContent) {
    changeViewToSelectProfile();
  }
  return (
    <div className='app'>
      {showMenu ? <Menu hideMenu={hideMenu} changeViewToSelectProfile={changeViewToSelectProfile}/> : null}
      <Nav displayMenu={displayMenu} />
      {pageContent}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
