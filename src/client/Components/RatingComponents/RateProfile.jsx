import React, { useState } from 'react';
import axios from 'axios';
import Blurb from './Blurb.jsx';
import Picture from './Picture.jsx';
import Feedback from './Feedback.jsx';
import LikeDislikeButtons from './LikeDislikeButtons.jsx';
import { navigate } from '@reach/router';

const RateProfile = ({ userID }) => {
  const [cards, setCards] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [message, setMessage] = useState('');

  const submitFeedback = () => {
    if (message.length > 0) {
      axios.post('/api/feedback', { feedbackText: message, userID }).then(response => {
        const { error } = response.data;
        if (error) {
          alert('something went wrong 😞');
          return;
        }
        navigate(`/results/${userID}`);
      });
    } else {
      navigate(`/results/${userID}`);
    }
  };

  const postRating = (rating, nextCardIndex, postObject) => {
    axios.post('/api/ratings', { ...postObject, rating }).then(response => {
      const { error } = response.data;
      if (error) {
        alert('something went wrong 😞');
      } else {
        setCardIndex(nextCardIndex);
      }
    });
  };

  if (cards.length === 0) {
    axios.get(`/api/userContent?userID=${userID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return null;
      }

      const shuffledData = shuffle(data);

      const cardObjects = shuffledData.map(
        ({ blurbID, blurb, pictureID, pictureURL }, currentCardIndex) =>
          blurbID
            ? {
                element: <Blurb key={blurbID} blurb={blurb} />,
                likeAction: () => postRating(1, currentCardIndex + 1, { blurbID }),
                dislikeAction: () => postRating(0, currentCardIndex + 1, { blurbID }),
                likeMessage: null,
                dislikeMessage: null,
              }
            : {
                element: <Picture key={pictureID} pictureURL={pictureURL} />,
                likeAction: () => postRating(1, currentCardIndex + 1, { pictureID }),
                dislikeAction: () => postRating(0, currentCardIndex + 1, { pictureID }),
                likeMessage: null,
                dislikeMessage: null,
              },
      );

      cardObjects.push({
        element: null,
        likeAction: null,
        dislikeAction: () => navigate(`/results/${userID}`),
        likeMessage: 'Submit',
        dislikeMessage: 'Skip',
      });
      setCards(cardObjects);
    });
    return null;
  }

  return (
    <div>
      <div className='card-stack__container'>
        {cards[cardIndex].element}
        <Feedback setMessage={setMessage} message={message} />
      </div>
      {/* <div className='card-stack__container'>{cards[i + 1].element}</div> */}
      <LikeDislikeButtons
        dislikeAction={cards[cardIndex].dislikeAction}
        dislikeMessage={cards[cardIndex].dislikeMessage}
        likeAction={cards[cardIndex].likeAction ? cards[cardIndex].likeAction : submitFeedback}
        likeMessage={cards[cardIndex].likeMessage}
      />
    </div>
  );
};

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

export default RateProfile;
