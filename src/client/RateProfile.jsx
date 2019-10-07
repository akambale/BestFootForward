import React, { useState } from 'react';
import axios from 'axios';
import RatingTable from './RatingTable.jsx';
import Card from './Card.jsx';

const RateProfile = ({userID, setPageContent}) => {
  const [cardStack, setCardStack] = useState([])
  const [currentCard, setCurrentCard] = useState(null);
  const [cardIndex, setCardIndex] = useState(0)

  console.log(cardIndex);

  if (cardStack.length === 0) {
    axios.get(`/api/userContent?userID=${userID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }
      setCardStack(data);
    });
  } else if (cardIndex >= cardStack.length) {
      setPageContent(<RatingTable userID={userID} />)
  } else if (!currentCard) {
    setCurrentCard(cardStack[cardIndex]);
  } else {
    return (
      <Card
        currentCard={currentCard}
        setCardIndex={setCardIndex}
        cardIndex={cardIndex}
      />
    );
  }

  return null;
};

export default RateProfile;
