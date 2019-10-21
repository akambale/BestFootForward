import React, { useState } from 'react';
import axios from 'axios';

const RatingTableRow = props => {
  const [totalVotes, setTotalVotes] = useState('');
  const [averageRating, setAverageRating] = useState('');

  const { blurbID, blurb, pictureID, pictureURL } = props.content;
  if (blurb) {
    axios.get(`/api/avgRating?blurbID=${blurbID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }

      setTotalVotes(data[0].voteCount);
      setAverageRating(data[0].avgRating);
    });
  } else {
    axios.get(`/api/avgRating?pictureID=${pictureID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }

      setTotalVotes(data[0].voteCount);
      setAverageRating(data[0].avgRating);
    });
  }

  return (
    <div className='table'>
      {blurb ? <div className='left'>{blurb}</div> : <div className='left'><img className='left-image' src={pictureURL} /></div>}
      <div className='right'>{`Total Votes: ${totalVotes}`}<br />{`Average Rating: ${averageRating}%`}</div>
    </div>
  );
};

export default RatingTableRow;
