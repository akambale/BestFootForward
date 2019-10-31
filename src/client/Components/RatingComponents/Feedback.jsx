import React from 'react';

const Feedback = ({ setMessage, message }) => {
  const changeMessage = e => {
    setMessage(e.target.value);
  };

  return (
    <div className='feedback'>
      <textarea
        value={message}
        onChange={changeMessage}
        className='feedback__textarea'
        placeholder='Type here to give constructive feedback (optional) . . .'
      ></textarea>
    </div>
  );
};

export default Feedback;
