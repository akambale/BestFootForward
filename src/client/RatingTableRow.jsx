import React, { useState } from 'react';
import axios from 'axios';

const RatingTableRow = props => {
  const [c, f] = useState('');
  const [d, p] = useState('');

  const { blurbID, blurb, pictureID, pictureURL } = props.content;
  if (blurb) {
    axios.get(`/api/avgRating?blurbID=${blurbID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }

      f(data[0].voteCount);
      p(data[0].avgRating);
    });
  } else {
    axios.get(`/api/avgRating?pictureID=${pictureID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }

      f(data[0].voteCount);
      p(data[0].avgRating);
    });
  }

  return (
    <div className='table'>
      {blurb ? <div className='left'>{blurb}</div> : <img className='left' src={pictureURL} />}
      <div className='right'>{`Total Votes: ${c} Average Rating: ${d}%`}</div>
    </div>
  );
};

export default RatingTableRow;
