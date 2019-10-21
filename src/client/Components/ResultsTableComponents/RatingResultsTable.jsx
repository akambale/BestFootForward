import React, { useState } from 'react';
import axios from 'axios';
import RatingResultsTableRow from './RatingResultsTableRow';

const RatingResultsTable = ({userID, changeViewToSelectProfile}) => {
  const [userContent, setUserContent] = useState([]);
  const [feedback, setFeedback] = useState([])

  if (userContent.length === 0) {
    axios.get(`/api/userContent?userID=${userID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }
      const userContentArr = data.map((content, i) => {
        return <RatingResultsTableRow key={i} content={content} />;
      });
      setUserContent(userContentArr);
    });

    axios.get(`/api/feedback?userID=${userID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }

      const feedbackComponents = data.map(({feedbackText, feedbackID}) => <li key={feedbackID} className='table-feedback-row'>{feedbackText}</li>)
      setFeedback(feedbackComponents);
    })
  }

  return (
    <div className='table-master'>
      {userContent}
      <h4>Feedback from raters</h4>
      <ul>
        {feedback}
      </ul>
      <button onClick={changeViewToSelectProfile}>Return to Home Page</button>
    </div>
  );
};

export default RatingResultsTable;
