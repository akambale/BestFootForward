import React from 'react';

const RateProfile = props => (
  <div>
    <div>{props.card}</div>
    <div className='like-dislike-container'>
      <button
        className='like-dislike-container__like like-dislike-container__button-shared'
        onClick={props.removeTopCard}
      >
        Like
      </button>
      <button
        className='like-dislike-container__dislike like-dislike-container__button-shared'
        onClick={props.removeTopCard}
      >
        Dislike
      </button>
    </div>
  </div>
);

export default RateProfile;
