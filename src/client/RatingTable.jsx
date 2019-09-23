import React, { useState } from 'react';
import axios from 'axios';

const RatingTable = props => {
  const [a, b] = useState();

  axios.get(`/api/userContent?userID=${props.id}`).then(response => {
    const { data, err } = response.data;
    if (err) {
      alert('something went wrong 😞');
      return;
    }
    const userContentArr = data.map(content => {
      const { blurbID, blurb, pictureID, pictureURL } = content;
      if (content.blurb) {
        return (
          <div className='table'>
            <div className='left'>{blurb}</div>
            <div className='right'>75%</div>
          </div>
        );
      } else {
        return (
          <div className='table'>
            <img className='left' src={pictureURL} />
            <div className='right'>75%</div>
          </div>
        );
      }
    });
    b(userContentArr);
  });

  return <div>{a}</div>;
};

export default RatingTable;
