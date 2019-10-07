import React, {useState} from 'react';
import Blurb from './Blurb.jsx';
import Picture from './Picture.jsx';
import axios from 'axios';

const Card = ({setCardIndex, cardIndex, currentCard: {blurbID, pictureID, blurb, pictureURL}}) => {
  const [postObject, setPostObject] = useState({});
  const [content, setContent] = useState(null);

  if (!content && blurbID) {
    setContent(<Blurb key={blurbID} blurb={blurb} />);
    setPostObject({
      blurbID,
    });
  } else if (!content) {
    setContent(<Picture key={pictureID} pictureURL={pictureURL} />);
    setPostObject({
      pictureID,
    });
  }

  const postRating = rating => {
    axios.post('/api/ratings', { ...postObject, rating }).then(response => {
      const { error } = response.data;
      if (error) {
        alert('something went wrong 😞');
      } else {
        setCardIndex(cardIndex++);
      }
    });
  };

  return (
    <div>
      {content}
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
  ) 
}

export default Card;