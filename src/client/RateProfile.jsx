import React from 'react';
import axios from 'axios';
const RateProfile = props => {
  const { blurbID, pictureID, removeTopCard, card } = props;
  const postRating = rating => {
    let postObject = {};

    if (blurbID) {
      postObject = {
        rating,
        blurbID,
      };
    } else {
      postObject = {
        rating,
        pictureID,
      };
    }

    axios.post('/api/ratings', postObject).then(response => {
      const { error } = response.data;
      if (error) {
        alert('something went wrong 😞');
      } else {
        removeTopCard();
      }
    });
  };

  return (
    <div>
      <div>{card}</div>
      <div className='like-dislike-container'>
        <button
          className='like-dislike-container__dislike like-dislike-container__button-shared'
          onClick={() => postRating(0)}
        >
          Dislike
        </button>
        <button
          className='like-dislike-container__like like-dislike-container__button-shared'
          onClick={() => postRating(1)}
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default RateProfile;
