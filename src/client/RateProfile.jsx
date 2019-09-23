import React, { useState } from 'react';
import axios from 'axios';
import Blurb from './Blurb.jsx';
import Picture from './Picture.jsx';

const RateProfile = props => {
  const [card, setCurrentCard] = useState(null);
  const [postObject, setPostObject] = useState({});
  const { removeTopCard, cardObj } = props;
  const { blurbID, pictureID, blurb, pictureURL } = cardObj;

  if (card === null) {
    if (blurbID) {
      console.log(props);
      setCurrentCard(<Blurb key={blurbID} blurbID={blurbID} blurb={blurb} />);
      setPostObject({
        blurbID,
      });
    } else {
      setCurrentCard(<Picture pictureID={pictureID} key={pictureID} pictureURL={pictureURL} />);
      setPostObject({
        pictureID,
      });
    }
  }
  const postRating = rating => {
    axios.post('/api/ratings', { ...postObject, rating }).then(response => {
      const { error } = response.data;
      if (error) {
        alert('something went wrong 😞');
      } else {
        removeTopCard();
        setCurrentCard(null);
      }
    });
  };

  return (
    <div>
      {card}
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
