import React, { useState } from 'react';
import axios from 'axios';
import LikeDislikeButtons from './LikeDislikeButtons.jsx';

const CardStack = ({ cardObjects, userID, showFeedback }) => {
  const [cardIndex, setCardIndex] = useState(0);

  if (cardIndex >= cardObjects.length) {
    showFeedback(userID);
    return null;
  }
  const { element, postObject } = cardObjects[cardIndex];

  const postRating = rating => {
    axios.post('/api/ratings', { ...postObject, rating }).then(response => {
      const { error } = response.data;
      if (error) {
        alert('something went wrong 😞');
      } else {
        setCardIndex(cardIndex + 1);
      }
    });
  };

  return (
    <div>
      <div className='card-stack__container'>{element}</div>
      <LikeDislikeButtons postRating={postRating} />
    </div>
  );
};

export default CardStack;
