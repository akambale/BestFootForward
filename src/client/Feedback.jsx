import React, { useState } from 'react';

const Feedback = props => {
  const [message, setMessage] = useState('');

  const changeMessage = e => {
    setMessage(e.target.value);
  };

  console.log(message);
  return (
    <div>
      <h4>Add some constructive feedback (optional)</h4>
      <textarea value={message} onChange={changeMessage} className={'textarea'}></textarea>
      <div className='like-dislike-container'>
        <button
          onClick={props.removeTopCard}
          className='like-dislike-container__dislike like-dislike-container__button-shared'
        >
          Skip
        </button>
        <button
          onClick={props.removeTopCard}
          className='like-dislike-container__like like-dislike-container__button-shared'
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default Feedback;
