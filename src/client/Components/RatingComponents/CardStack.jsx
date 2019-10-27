import React, { useState } from 'react';
import axios from 'axios';
import LikeDislikeButtons from './LikeDislikeButtons.jsx';
import { navigate } from '@reach/router';

const CardStack = ({ cardObjects, userID }) => {
  const [cardIndex, setCardIndex] = useState(0);

  if (cardIndex >= cardObjects.length) {
    navigate(`feedback/${userID}`);
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
      {postObject !== null ? (
        <LikeDislikeButtons dislikeAction={() => postRating(0)} likeAction={() => postRating(1)} />
      ) : null
      // (
      //   <LikeDislikeButtons
      //     dislikeAction={() => navigate(`/results/${userID}`)}
      //     dislikeMessage={'Skip'}
      //     likeAction={submitFeedback}
      //     likeMessage={'Submit'}
      //   />
      // )
      }
    </div>
  );
};

export default CardStack;
