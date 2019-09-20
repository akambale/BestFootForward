import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import SelectProfile from './SelectProfile.jsx';
import axios from 'axios';

const App = () => {
  const [currentProfile, changeCurrentProfile] = useState();
  const [nextProfile, changeNextProfile] = useState();

  const setProfile = id => {
    axios.get(`/api/userContent?userID=${id}`, response => console.log(response.data));
    // changeNextProfile({});
  };

  return (
    <div>
      <div className='sassyDiv'>{`React is working`}</div>
      <SelectProfile setProfile={setProfile} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
