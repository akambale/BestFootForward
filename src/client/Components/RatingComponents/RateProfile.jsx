import React, { useState } from 'react';
import axios from 'axios';
import CardStack from './CardStack.jsx';
import Blurb from './Blurb.jsx';
import Picture from './Picture.jsx';

const RateProfile = ({userID, showFeedback}) => {
  const [cards, setCards] = useState([]);
  if (cards.length === 0) {
    axios.get(`/api/userContent?userID=${userID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return null;
      }

      const cardObjects = data.map(({blurbID, blurb, pictureID, pictureURL}) => (
        blurbID ? (
          { 
            element: <Blurb 
              key={blurbID} 
              blurb={blurb} 
            />,
            postObject: {blurbID},
          }
        ) : (
          {
            element: <Picture 
              key={pictureID} 
              pictureURL={pictureURL}
            />,
            postObject: {pictureID},
          }
        )
      ));

      setCards(
        <CardStack showFeedback={showFeedback} cardObjects={cardObjects} userID={userID}/>
      );
    });
  }
  return <div>{cards}</div>;
}

export default RateProfile;