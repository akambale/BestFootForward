import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import SelectProfile from './SelectProfile.jsx';
import Blurb from './Blurb.jsx';
import Picture from './Picture.jsx';
import RateProfile from './RateProfile.jsx';
import RatingTable from './RatingTable.jsx';
import Feedback from './Feedback.jsx';
import axios from 'axios';

const App = () => {
  const [cardStack, setStack] = useState([]);
  const [ratingTable, setDisplayRatingTable] = useState(null);

  const removeTopCard = () => {
    const newDeck = cardStack.slice(1);
    setStack(newDeck);
  };

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
          return {
            card: <Blurb key={blurbID} blurbID={blurbID} blurb={blurb} />,
            blurbID: blurbID,
            pictureID: null,
          };
        } else {
          return {
            card: <Picture pictureID={pictureID} key={pictureID} pictureURL={pictureURL} />,
            blurbID: null,
            pictureID: pictureID,
          };
        }
      });
      userContentArr.push(<Feedback removeTopCard={removeTopCard} />);
      setStack(userContentArr);
    });
    setDisplayRatingTable(null);
  };

  const showRatings = userID => setDisplayRatingTable(<RatingTable userID={userID} />);

  return (
    <div>
      <div className='sassyDiv'>
        Best Foot Forward <br />
        <span className='subtitle'>The app to help you optimize your dating profile</span>
      </div>
      <div>
        {cardStack.length > 0 ? (
          <RateProfile
            card={cardStack[0].card}
            removeTopCard={removeTopCard}
            blurbID={cardStack[0].blurbID}
            pictureID={cardStack[0].pictureID}
          />
        ) : (
          <SelectProfile addUserCardsToDeck={addUserCardsToDeck} showRatings={showRatings} />
        )}
      </div>
      {ratingTable}
      <button onClick={() => setDisplayRatingTable(null)}>clear results</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
