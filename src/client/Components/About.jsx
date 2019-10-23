import React from 'react';

const About = ({ changeViewToSelectProfile }) => (
  <div className='about'>
    <h4 className='about__heading'>What?</h4>
    <p className='about__paragraph'>
      Best Foot Forward is an app where you can experiment with your dating profile content to see
      what is best (this application is currently in the prototype phase, you can't upload your own
      content yet). Already taken or just want to help others out? Select a profile and tell other
      users which parts of their profile you like and dislike. See how your votes stack up!
    </p>
    <h4 className='about__heading'>Why?</h4>
    <p className='about__paragraph'>
      Finding success in online dating apps can be challenging. Taking the right photos and writing
      the best description takes time. And worst of all, if a profile is not successful, it's tough
      to pinpoint what specifically is bad. You can ask your friends for help, but because they like
      you (we hope) you may not receive honest feedback. Get the anonymous feedback you need from
      strangers and experiment away!
    </p>
    <h4 className='about__heading'>Who?</h4>
    <p className='about__paragraph'>
      This app was developed by <a href='http://amoghk.com'>Amogh Kambale.</a> He built this app to
      entertain those with significant others who miss the fun of swiping and to help out all the
      sad single lonely people in the world (himself included). He is currently looking for
      front-end and full-stack roles in NYC.{' '}
      <a href='http://amoghk.com/contact'> Contact him about jobs</a> so he can afford to go on
      dates.
    </p>
    <div className='table__dismiss-button' tabIndex='1' onClick={changeViewToSelectProfile}>
      Return to Browse Profiles
    </div>
  </div>
);

export default About;
