import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import SelectProfile from './SelectProfile.jsx';
import Blurb from './Blurb.jsx';
import Picture from './Picture.jsx';
import RateProfile from './RateProfile.jsx';
import axios from 'axios';

const App = () => {
  const [currentProfile, changeCurrentProfile] = useState([]);
  // const [nextProfile, changeNextProfile] = useState([]);

  const setProfile = id => {
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
      changeCurrentProfile(userContentArr);
    });
  };

  const removeTopCard = () => {
    const newDeck = currentProfile.slice(1);
    changeCurrentProfile(newDeck);
  };

  return (
    <div>
      <div className='sassyDiv'>Best Foot Forward</div>
      <div>
        {currentProfile.length > 0 ? (
          <RateProfile card={currentProfile[0]} removeTopCard={removeTopCard} />
        ) : (
          <SelectProfile setProfile={setProfile} />
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
