import React, { useState } from 'react';
import axios from 'axios';
import CardStack from './CardStack.jsx';
import Blurb from './Blurb.jsx';
import Picture from './Picture.jsx';
import Feedback from './Feedback.jsx';

const shuffle = arr => {
  let currentIndex = arr.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};

const RateProfile = ({ userID }) => {
  const [cards, setCards] = useState([]);
  if (cards.length === 0) {
    axios.get(`/api/userContent?userID=${userID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return null;
      }

      const shuffledData = shuffle(data);

      const cardObjects = shuffledData.map(({ blurbID, blurb, pictureID, pictureURL }) =>
        blurbID
          ? {
              element: <Blurb key={blurbID} blurb={blurb} />,
              postObject: { blurbID },
            }
          : {
              element: <Picture key={pictureID} pictureURL={pictureURL} />,
              postObject: { pictureID },
            },
      );

      cardObjects.push({
        element: <Feedback userID={userID} />,
        postObject: null,
      });
      setCards(<CardStack cardObjects={cardObjects} userID={userID} />);
    });
  }
  return <div>{cards}</div>;
};

export default RateProfile;
