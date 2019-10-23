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
      <div className='feedback__textarea-container'>
        <textarea
          value={message}
          onChange={changeMessage}
          className='feedback__textarea'
          placeholder='Type here to give constructive feedback (optional) . . .'
        ></textarea>
      </div>
      <div className='vote__container'>
        <div
          className='vote__button vote__button__dislike'
          onClick={() => showRatings(userID)}
          tabIndex='1'
        >
          <p className='feedback__button-text'>Skip</p>
        </div>
        <div className='vote__button vote__button__like' onClick={submitFeedback} tabIndex='1'>
          <p className='feedback__button-text'>Submit</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
