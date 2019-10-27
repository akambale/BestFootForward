import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import LikeDislikeButtons from './LikeDislikeButtons.jsx';

const Feedback = ({ userID }) => {
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
        navigate(`/results/${userID}`);
      });
    } else {
      navigate(`/results/${userID}`);
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
      <LikeDislikeButtons
        dislikeAction={() => navigate(`/results/${userID}`)}
        dislikeMessage={'Skip'}
        likeAction={submitFeedback}
        likeMessage={'Submit'}
      />
    </div>
  );
};

export default Feedback;
