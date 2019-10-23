import React from 'react';

const Picture = ({ pictureURL }) => (
  <div className='picture__container'>
    <img src={pictureURL} className='picture' />
  </div>
);

export default Picture;
