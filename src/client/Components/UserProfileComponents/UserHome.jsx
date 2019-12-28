import React, { useState } from 'react';
import RatingResultsTable from '../ResultsTableComponents/RatingResultsTable.jsx';
import { navigate } from '@reach/router';

const UserHome = () => {
  const uploadFile = e => {
    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append('photo', file);
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
      headers: new Headers({ 'content-type': 'image/png' }),
    }).then(res => console.log(res));
    // change the view to the crop component
    // navigate('crop', { src: file });
  };

  return (
    <div>
      <div>
        <div>Email {'me@amoghk.com'}</div>
        <div>Age {25}</div>
        <div>Rating count {32}</div>
        <div>Total Profiles Rated {1634}</div>
      </div>
      <div>
        <form>
          <label htmlFor='pic'>Upload a new photo</label>
          <input type='file' name='pic' accept='image/*' onChange={uploadFile}></input>
        </form>
      </div>
      <div>
        <form>
          <textarea></textarea>
          <input type='button' value='Add Blurb'></input>
        </form>
      </div>
      <RatingResultsTable userID={1} />
    </div>
  );
};

export default UserHome;
