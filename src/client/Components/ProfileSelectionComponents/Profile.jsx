import React, { useState } from 'react';
import axios from 'axios';

const Profile = ({userID, name, addUserCardsToDeck, showRatings}) => {
  const [pictureURL, setPictureURL] = useState();

  const getFirstPicture = userID => {
    axios.get(`/api/firstPicture?userID=${userID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }
      setPictureURL(data[0].pictureURL);
    });
  };

  if (!pictureURL) {
    getFirstPicture(userID);
  }

  return (
    <div className='profile-box'>
      <img src={pictureURL} alt='user image here' className='profile-photo' />
      <p className='profile-name'>{name}</p>
      <button onClick={() => addUserCardsToDeck(userID)}>Rate Profile</button>
      <button onClick={() => showRatings(userID)}>View Rating Results</button>
    </div>
  );
};

export default Profile;
