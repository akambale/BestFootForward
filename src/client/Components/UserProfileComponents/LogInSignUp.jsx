import React, { useState } from 'react';
import FlagFeedback from './FlagFeedback.jsx';

const date = new Date();
const year = date.getFullYear() - 18;
const month = date.getMonth() + 1;
const minDate = `${year}-${month}`;

const LogInSignUp = () => {
  const [isLogin, changeIsLogin] = useState(false);
  const [agreedToTerms, changeAgreed] = useState(false);
  const [isTermsVisible, showTerms] = useState(false);
  const [isOldEnough, changeOldEnough] = useState(false);
  const toggleTerms = () => showTerms(!isTermsVisible);
  const toggleAgreed = () => changeAgreed(!agreedToTerms);
  const toggleAge = () => changeOldEnough(!isOldEnough);
  return (
    <form className='login'>
      <input
        className='login__toggle'
        onClick={() => changeIsLogin(true)}
        type='button'
        value='Log In'
      ></input>
      <input
        className='login__toggle'
        onClick={() => changeIsLogin(false)}
        type='button'
        value='Sign Up'
      ></input>
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' type='email' placeholder='email'></input>
      <label htmlFor='password'>Password</label>
      <input name='password' type='text' type='password' placeholder='*****'></input>{' '}
      <h2>
        HEY FYI this app is still in it's alpha release so we can't guarantee that we won't lose
        your data or even your entire account. Please use the website with that scary fact in mind.
      </h2>
      {!isLogin ? (
        <div>
          <label htmlFor='month'>Birth Year and Month</label>
          <input type='month' max={minDate}></input>
          <input type='checkbox' name='adult' checked={isOldEnough} onChange={toggleAge}></input>
          <label htmlFor='adult'>I am 18 years of age or older</label>
          <input
            type='checkbox'
            name='terms'
            checked={agreedToTerms}
            onChange={toggleAgreed}
          ></input>
          <label htmlFor='terms'>
            I agree to the{' '}
            <a className='login__tos-link' onClick={toggleTerms}>
              terms of service
            </a>
          </label>
          {isTermsVisible ? <iframe className='login__iframe' src='/terms.html' /> : null}
          <p className='login__commitments'>Our commitments to you</p>
          <ol>
            <li>
              We will only collect the minimum amount of personal data needed from you to provide
              our services
            </li>
            <li>We will never sell your data</li>
            <li>
              You will always have the ability to delete your account and your uploaded content
            </li>
            <li>This app will always offer a free version</li>
          </ol>
        </div>
      ) : (
        <p>If you forgot your password, please email us at hello@bestfoot.dating</p>
      )}
      <input
        type='button'
        className='login__btn'
        value={isLogin ? 'Log In' : 'Sign Up'}
        // update isLogin to look for email and password entered state
        disabled={!(isLogin || (agreedToTerms && isOldEnough))}
      ></input>
    </form>
  );
};

export default LogInSignUp;
