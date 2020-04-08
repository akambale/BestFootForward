import { Link } from '@reach/router';
import React from 'react';

const About = () => (
  <div className='about'>
    <h4 className='about__heading'>State of the app</h4>
    <p className='about__paragraph'>
      HEY FYI this app is still in it's alpha release so we can't guarantee that we won't lose your
      data or even your entire account. Please use the website with that scary fact in mind. <br />
      <br />
      The UI (user interface) is going to be rather ugly for the time being, I'm sorry about that.
      As a person who <i>literally gets paid from 9-5 to make stuff pretty on the web,</i> it hurts
      my soul to make this compromise. But this website is like my child and the cobbler's children
      shall have no shoes; this cobbler is very tired at the end of the work week and just wants to
      sleep in on Saturday. Eventually, I'll make the website a delight to use but my initial
      concern is to get the website working behind the scenes.
      <br />
      <br />
      If you do run into any odd problems, please reach us at hello@bestfoot.dating
    </p>
    <h4 className='about__heading'>What?</h4>
    <p className='about__paragraph'>
      Best Foot is an app where you can experiment with your dating profile content to see what is
      most effective. Already taken or just want to help others out? Select a profile and tell other
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
      sad single lonely people in the world (himself included).
    </p>
    <h4 className='about__heading'>How?</h4>
    <p className='about__paragraph'>
      As of now, this app is completely free to use and does not have any ads or ways to make money.
      This app costs about $550 per year to bring to you. If you've found it useful and want to help
      me out with the expenses, my venmo is @amoghkambale
    </p>
    <p className='login__commitments'>Our commitments to you</p>
    <ol>
      <li>
        We will only collect the minimum amount of personal data needed from you to provide our
        services
      </li>
      <li>We will never sell your data</li>
      <li>You will always have the ability to delete your account and your uploaded content</li>
      <li>This app will always offer a free version</li>
    </ol>
    <Link to='/' className='about__button'>
      Return to Browse Profiles
    </Link>
  </div>
);

export default About;
