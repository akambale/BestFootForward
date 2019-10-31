import React, { useState } from 'react';
import axios from 'axios';
import RatingResultsTableRow from './RatingResultsTableRow';
import { Link } from '@reach/router';

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
      <h3 className='table__heading-padding'>Total Votes for Profile Content</h3>
      {userContent}
      <h4 className='table__heading-padding'>Feedback from Raters</h4>
      <ul className='table__feedback-row__container'>{feedback}</ul>
      <Link className='table__dismiss-button' to='/'>
        Return to Browse Profiles
      </Link>
    </div>
  );
};

export default RatingResultsTable;
