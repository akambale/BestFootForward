import React, { useState } from 'react';
import axios from 'axios';
import RatingResultsTableRow from './RatingResultsTableRow';
import { navigate } from '@reach/router';

const RatingResultsTable = ({ userID }) => {
  const [userContent, setUserContent] = useState([]);
  const [feedback, setFeedback] = useState([]);

  if (userContent.length === 0) {
    axios.get(`/api/userContent?userID=${userID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }
      const userContentArr = data.map((content, pictureID, blurbID) => {
        return <RatingResultsTableRow key={pictureID ? pictureID : blurbID} content={content} />;
      });
      setUserContent(userContentArr);
    });

    axios.get(`/api/feedback?userID=${userID}`).then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }

      const feedbackComponents = data.map(({ feedbackText, feedbackID }) => (
        <li key={feedbackID} className='table__feedback-row'>
          "{feedbackText}"
        </li>
      ));
      setFeedback(feedbackComponents);
    });
  }

  return (
    <div className='table'>
      <h3 className='table-heading-padding'>Total Votes for Profile Content</h3>
      {userContent}
      <h4 className='table-heading-padding'>Feedback from Raters</h4>
      <ul className='table__feedback-row-container'>{feedback}</ul>
      <div className='table__dismiss-button' tabIndex='0' onClick={() => navigate('/')}>
        Return to Browse Profiles
      </div>
    </div>
  );
};

export default RatingResultsTable;
