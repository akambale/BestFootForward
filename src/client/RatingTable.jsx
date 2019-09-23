import React, { useState } from 'react';
import axios from 'axios';
import RatingTableRow from './RatingTableRow';

const RatingTable = props => {
  const [a, b] = useState(null);

  if (a === null) {
    axios.get(`/api/userContent?userID=${props.userID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }
      const userContentArr = data.map((content, i) => {
        return <RatingTableRow key={i} content={content} />;
      });
      b(userContentArr);
    });
  }

  return <div>{a}</div>;
};

export default RatingTable;
