import React from 'react';
import Button from '../GeneralComponents/Button.jsx';

const LikeDislikeButtons = ({ dislikeAction, likeAction, likeMessage, dislikeMessage }) => (
  <div className='vote__container'>
    <Button className='vote__button vote__button__dislike' onClick={dislikeAction}>
      {dislikeMessage ? dislikeMessage : <div className='vote__button__x' />}
    </Button>
    <Button className='vote__button vote__button__like' onClick={likeAction}>
      {likeMessage ? likeMessage : <div className='vote__button__check' />}
    </Button>
  </div>
);
export default LikeDislikeButtons;
