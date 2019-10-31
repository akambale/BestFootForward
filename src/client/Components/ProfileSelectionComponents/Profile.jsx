import axios from 'axios';
import { Link } from '@reach/router';
import React, { useState } from 'react';

const Profile = ({ userID, name }) => {
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
    <div className='profile'>
      <div className='profile__photo__container'>
        <img src={pictureURL} alt='user image here' className='profile__photo' />
      </div>
      <p className='profile__name'>{name}</p>
      <div className='profile__button__container'>
        <Link className='profile__button util__btn' to={`rateprofile/${userID}`}>
          Rate Profile
        </Link>
        <Link className='profile__button util__btn' to={`results/${userID}`}>
          View Rating Results
        </Link>
      </div>
    </div>
  );
};

export default Profile;
