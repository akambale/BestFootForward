import React, { useState } from 'react';
import axios from 'axios';

const RatingResultsTableRow = props => {
  const [totalVotes, setTotalVotes] = useState('');
  const [averageRating, setAverageRating] = useState('');

  const { blurbID, blurb, pictureID, pictureURL, isOwner } = props.content;
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
    <div className='table__row'>
      {blurb ? (
        <div className='table__row__blurb'>{blurb}</div>
      ) : (
        <div className='table__row__image-container'>
          <img className='table__row__image' src={pictureURL} />
        </div>
      )}
      <div>{`Total Votes: ${totalVotes} | Average Rating: ${averageRating}%`}</div>
      <div className='table__row__btn__container'>
        {props.isOwner ? (
          <div>
            <button>Reset Votes</button>
            <button>Delete {blurb ? 'Blurb' : 'Picture'}</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RatingResultsTableRow;
