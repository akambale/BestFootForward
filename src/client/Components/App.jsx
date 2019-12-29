import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import About from './About.jsx';
import Nav from './Nav.jsx';
import RateProfile from './RatingComponents/RateProfile.jsx';
import RatingResultsTable from './ResultsTableComponents/RatingResultsTable.jsx';
import SelectProfile from './ProfileSelectionComponents/SelectProfile.jsx';
import LogInSignUp from './UserProfileComponents/LogInSignUp.jsx';
import UserHome from './UserProfileComponents/UserHome.jsx';
import Crop from './UserProfileComponents/Crop.jsx';

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <Router>
        <SelectProfile path='/' />
        <RateProfile path='rateprofile/:userID' />
        <RatingResultsTable path='results/:userID' />
        <About path='about' />
        <LogInSignUp path='login' />
        <UserHome path='home' />
        <Crop path='crop' />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
