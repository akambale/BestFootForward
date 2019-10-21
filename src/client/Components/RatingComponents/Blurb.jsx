import React from 'react';

const Blurb = ({blurb}) => (
  <div className='blurb'>
    <h3 className='blurb-title'>Dating Profile Description</h3>
    <p className='blurb-text'>{blurb}</p>
  </div>
);

export default Blurb;
