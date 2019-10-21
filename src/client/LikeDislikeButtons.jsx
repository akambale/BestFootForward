import React from 'react';

const LikeDislikeButtons = ({postRating}) => (
    <div>
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

export default LikeDislikeButtons;