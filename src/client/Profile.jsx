import React from 'react';
import axios from 'axios';

const Profile = props => {
  const getFirstPicture = async userID => {
    let link;
    await axios.get(`/api/firstPicture?userID=${userID}`, response => {
      link = response.data;
    });
    return link;
  };

  return (
    <div className='profile-box'>
      <img src={getFirstPicture(props.userID)} alt='user image here' className='profile-photo' />
      <p className='profile-name' onClick={() => props.setProfile(props.userID)}>
        {props.name ? props.name : 'Bob Belcher'}
      </p>
    </div>
  );
};

export default Profile;
