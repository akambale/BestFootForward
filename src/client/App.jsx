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
  const [cardStack, setStack] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [pageContent, setPageContent] = useState(<SelectProfile addUserCardsToDeck={addUserCardsToDeck} showRatings={showRatings} />);
  const [userIDBeingRated, setUserIDBeingRated] = useState(1);

  const removeTopCard = () => {
    const newDeck = cardStack.slice(1);
    setStack(newDeck);
    console.log(cardStack);

    if (cardStack.length === 0) {
      setPageContent(<RatingTable userID={userIDBeingRated} />)
    }
  };

  const addUserCardsToDeck = id => {
    axios.get(`/api/userContent?userID=${id}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }
      const userContentArr = data.map(content => ({ ...content, removeTopCard }));
      setStack(userContentArr);
      setPageContent(<RateProfile cardObj={cardStack[0]} removeTopCard={removeTopCard} />)
      setUserIDBeingRated(id);
    });
  };
  
  const displayMenu = () => setShowMenu(true);
  const hideMenu = () => setShowMenu(false);
  const showRatings = () => setPageContent(<RatingTable userID={userIDBeingRated} />);
  const changeViewSelectProfile = () => setPageContent(<SelectProfile addUserCardsToDeck={addUserCardsToDeck} showRatings={showRatings} />);

  return (
    <div className='app'>
      {showMenu ? <Menu hideMenu={hideMenu} changeViewSelectProfile={changeViewSelectProfile}/> : null}
      <Nav displayMenu={displayMenu} />
      {pageContent}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
