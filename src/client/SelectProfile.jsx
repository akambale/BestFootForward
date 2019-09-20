import React, { useState } from 'react';
import axios from 'axios';

import Profile from './Profile.jsx';

const SelectProfile = props => {
  const [profiles, setProfiles] = useState([]);

  axios.get('/api/allUsers').then(response => {
    const { data, err } = response.data;
    if (err) {
      alert('something went wrong 😞');
    }

    const profiles = data.map(({ name, userID }) => {
      return <Profile name={name} key={userID} setProfile={props.setProfile} />;
    });

    setProfiles(profiles);
  });

  return <div className='select-profile'>{profiles}</div>;
};

export default SelectProfile;
