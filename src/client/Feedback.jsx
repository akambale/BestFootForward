import React, { useState } from 'react';
import axios from 'axios';

const Feedback = ({showRatings, userID}) => {
  const [message, setMessage] = useState('');

  const changeMessage = e => {
    setMessage(e.target.value);
  };

  const submitFeedback = () => {
    if (message.length > 0) {
      axios.post('/api/feedback', {feedbackText: message, userID}).then(response => {
        const { error } = response.data;
        if (error) {
          alert('something went wrong 😞');
          return;
        }
        showRatings(userID);
      });
    } else {
      showRatings(userID);
    }
  }

  return (
    <div>
      <h4>Add some <b>constructive</b> feedback (optional)</h4>
      <textarea value={message} onChange={changeMessage} className={'textarea'}></textarea>
      <div className='like-dislike-container'>
        <button
          className='like-dislike-container__dislike like-dislike-container__button-shared'
          onClick={submitFeedback}
        >
          Skip
        </button>
        <button
          className='like-dislike-container__like like-dislike-container__button-shared'
          onClick={submitFeedback}
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default Feedback;
