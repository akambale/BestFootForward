import React, { useState } from 'react';

const FlagFeedback = () => {
  const [isNotConstructive, changeIsNotConstructive] = useState(false);
  const [isOffensive, changeIsOffensive] = useState(false);
  return (
    <div>
      <h3>Describe what is wrong with the feedback</h3>
      <form>
        <input
          checked={isOffensive}
          name='offensive'
          onChange={() => changeIsOffensive(!isOffensive)}
          type='checkbox'
        ></input>
        <label htmlFor='offensive'>Feedback was offensive</label>
        <input
          checked={isNotConstructive}
          name='constructive'
          onChange={() => changeIsNotConstructive(!isNotConstructive)}
          type='checkbox'
        ></input>
        <label htmlFor='constructive'>Feedback was not constructive</label>
        {isOffensive || isNotConstructive ? (
          <div>
            <p>
              Are you sure you want to flag this feedback? If you do, the reviewer's account may be
              suspended. If you flag too much feedback indiscriminately, your account may be
              suspended.
            </p>
            <input type='button' value='submit' />
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default FlagFeedback;
