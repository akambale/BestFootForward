import React from 'react';

const Blurb = props => (
  <div className='blurb'>
    <h4>Dating Profile Description</h4>
    <p>{props.blurb}</p>
  </div>
);

export default Blurb;
