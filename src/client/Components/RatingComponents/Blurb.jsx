import React from 'react';

const Blurb = ({ blurb }) => (
  <div className='blurb'>
    <h3 className='blurb__title'>Dating Profile Description</h3>
    <div className='blurb__flex-container'>
      <p className='blurb__text'>{blurb}</p>
    </div>
  </div>
);

export default Blurb;
