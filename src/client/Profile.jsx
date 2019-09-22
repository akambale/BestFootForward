import React, { useState } from 'react';
import axios from 'axios';

const Profile = props => {
  const [pictureURL, setPictureURL] = useState();

  const getFirstPicture = userID => {
    axios.get(`/api/firstPicture?userID=${userID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }
      setPictureURL(data.pictureURL);
    });
  };

  if (!pictureURL) {
    getFirstPicture(props.userID);
  }

  return (
    <div className='profile-box' onClick={props.setProfile(props.userID)}>
      <img src={pictureURL} alt='user image here' className='profile-photo' />
      <p className='profile-name' onClick={() => props.setProfile(props.userID)}>
        {props.name ? props.name : 'Bob Belcher'}
      </p>
    </div>
  );
};

export default Profile;
