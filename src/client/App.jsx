import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SelectProfile from './SelectProfile.jsx';
import RateProfile from './RateProfile.jsx';
import RatingTable from './RatingTable.jsx';
import Feedback from './Feedback.jsx'
import Nav from './Nav.jsx'
import Menu from './Menu.jsx'

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [pageContent, setPageContent] = useState(null);

  const displayMenu = () => setShowMenu(true);
  const hideMenu = () => setShowMenu(false);
  const changeViewToSelectProfile = () => setPageContent(selectProfileComponent);
  const showRatings = (userID) => setPageContent(<RatingTable userID={userID} changeViewToSelectProfile={changeViewToSelectProfile} />);
  const showFeedback = (userID) => setPageContent(<Feedback userID={userID} showRatings={showRatings} />)
  
  const addUserCardsToDeck = id => setPageContent(<RateProfile userID={id} showFeedback={showFeedback} />);
  const selectProfileComponent = <SelectProfile addUserCardsToDeck={addUserCardsToDeck} showRatings={showRatings} showRatings={showRatings} />;
  

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
