import React from 'react';

const LikeDislikeButtons = ({ postRating }) => (
  <div className='vote__container'>
    <div className='vote__button vote__button__dislike' onClick={() => postRating(0)} tabIndex='1'>
      <div className='vote__button__x'></div>
    </div>
    <div className='vote__button vote__button__like' onClick={() => postRating(1)} tabIndex='1'>
      <div className='vote__button__check'></div>
    </div>
  </div>
);

export default LikeDislikeButtons;
