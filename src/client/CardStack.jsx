import React, { useState } from 'react';
import axios from 'axios';
import LikeDislikeButtons from './LikeDislikeButtons.jsx';
import RatingTable from './RatingTable.jsx';

const CardStack = ({cardObjects, setPageContent, userID}) => {
  const [cardIndex, setCardIndex] = useState(0);
  console.log('cardIndex', cardIndex);

  if (cardIndex >= cardObjects.length) {
    setPageContent(<RatingTable userID={userID} />)
    return null;
  }
  const {element, postObject} = cardObjects[cardIndex];

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
      {element}
      <LikeDislikeButtons 
        postRating={postRating}
      />
    </div>
  );
};

export default CardStack;