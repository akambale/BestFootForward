import React from 'react';

const LikeDislikeButtons = ({ dislikeAction, likeAction, likeMessage, dislikeMessage }) => (
  <div className='vote__container'>
    <div className='vote__button vote__button__dislike' onClick={dislikeAction} tabIndex='1'>
      {dislikeMessage ? dislikeMessage : <div className='vote__button__x' />}
    </div>
    <div className='vote__button vote__button__like' onClick={likeAction} tabIndex='1'>
      {likeMessage ? likeMessage : <div className='vote__button__check' />}
    </div>
  </div>
);

export default LikeDislikeButtons;
