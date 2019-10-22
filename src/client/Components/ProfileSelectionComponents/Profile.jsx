import React, { useState } from 'react';
import axios from 'axios';

const Profile = ({ userID, name, addUserCardsToDeck, showRatings }) => {
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
    <div className='profile__container'>
      <img src={pictureURL} alt='user image here' className='profile__photo' />
      <p className='profile__name'>{name}</p>
      <div className='profile__button__container'>
        <div tabIndex='1' className='profile__button' onClick={() => addUserCardsToDeck(userID)}>
          Rate Profile
        </div>
        <div tabIndex='1' className='profile__button' onClick={() => showRatings(userID)}>
          View Rating Results
        </div>
      </div>
    </div>
  );
};

export default Profile;
