import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import SelectProfile from './SelectProfile.jsx';
import Blurb from './Blurb.jsx';
import Picture from './Picture.jsx';
import RateProfile from './RateProfile.jsx';
import RatingTable from './RatingTable.jsx';
import axios from 'axios';

const App = () => {
  const [cardStack, setStack] = useState([]);
  const [displayRatingTable, setDisplayRatingTable] = useState(false);

  const addUserCardsToDeck = id => {
    axios.get(`/api/userContent?userID=${id}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }
      const userContentArr = data.map(content => {
        const { blurbID, blurb, pictureID, pictureURL } = content;
        if (content.blurb) {
          return <Blurb key={blurbID} blurbID={blurbID} blurb={blurb} />;
        } else {
          return <Picture pictureID={pictureID} key={pictureID} pictureURL={pictureURL} />;
        }
      });
      setStack(userContentArr);
    });
    setDisplayRatingTable(false);
  };

  const showRatings = () => setDisplayRatingTable(true);

  const removeTopCard = () => {
    const newDeck = cardStack.slice(1);
    setStack(newDeck);
  };

  return (
    <div>
      <div className='sassyDiv'>
        Best Foot Forward <br />
        <span className='subtitle'>The app to help you optimize your dating profile</span>
      </div>
      <div>
        {cardStack.length > 0 ? (
          <RateProfile card={cardStack[0]} removeTopCard={removeTopCard} />
        ) : (
          <SelectProfile addUserCardsToDeck={addUserCardsToDeck} showRatings={showRatings} />
        )}
      </div>
      {displayRatingTable ? <RatingTable id={1} /> : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
