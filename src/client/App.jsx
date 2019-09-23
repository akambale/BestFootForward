import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SelectProfile from './SelectProfile.jsx';
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
    console.log(cardStack);
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
          <RateProfile cardObj={cardStack[0]} removeTopCard={removeTopCard} />
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
