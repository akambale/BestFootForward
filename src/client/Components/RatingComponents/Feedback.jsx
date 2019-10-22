import React, { useState } from 'react';
import axios from 'axios';

const Feedback = ({ showRatings, userID }) => {
  const [message, setMessage] = useState('');

  const changeMessage = e => {
    setMessage(e.target.value);
  };

  const submitFeedback = () => {
    if (message.length > 0) {
      axios.post('/api/feedback', { feedbackText: message, userID }).then(response => {
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
  };

  return (
    <div className='feedback'>
      <h3 className='feedback-title'>
        Add some <span className='feedback-title-span'>constructive</span> feedback (optional)
      </h3>
      <div className='feedback__textarea-container'>
        <textarea
          value={message}
          onChange={changeMessage}
          className='feedback__textarea'
          placeholder='Type here . . . '
        ></textarea>
      </div>
      <div className='feedback__button-container'>
        <div className='feedback__button' tabIndex='1' onClick={() => showRatings(userID)}>
          Skip
        </div>
        <div className='feedback__button' tabIndex='1' onClick={submitFeedback}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default Feedback;
