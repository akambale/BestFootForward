import React from 'react';

const RateProfile = props => (
  <div>
    <div>{props.card}</div>
    <button onClick={props.removeTopCard}>Like</button>
    <button onClick={props.removeTopCard}>Dislike</button>
  </div>
);

export default RateProfile;
