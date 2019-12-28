import React, { useState } from 'react';
import FlagFeedback from './FlagFeedback.jsx';

const date = new Date();
const year = date.getFullYear() - 18;
const month = date.getMonth() + 1;
const minDate = `${year}-${month}`;

const LogInSignUp = () => {
  const [isLogin, changeIsLogin] = useState(false);
  const [agreedToTerms, changeAgreed] = useState(false);
  return (
    <div className='login'>
      <div>
        <form>
          <input
            checked={!isLogin}
            name='islogin'
            onChange={() => changeIsLogin(!isLogin)}
            type='checkbox'
          ></input>
          <label htmlFor='islogin'>Sign Up</label>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' type='email' placeholder='email'></input>
          <label htmlFor='password'>Password</label>
          <input name='password' type='text' type='password' placeholder='*****'></input>
          {!isLogin ? (
            <div>
              <label htmlFor='month'>Birth Year and Month</label>
              <input type='month' max={minDate}></input>
            </div>
          ) : null}
          <input
            type='checkbox'
            name='terms'
            checked={!agreedToTerms}
            onChange={() => changeAgreed(!isLogin)}
          ></input>
          <label htmlFor='terms'>
            I agree to <a>terms of service</a>
          </label>
          <input
            type='button'
            className='login__btn'
            value={isLogin ? 'Log In' : 'Sign Up'}
          ></input>
        </form>
      </div>
      <div>
        <FlagFeedback />
      </div>
    </div>
  );
};

export default LogInSignUp;
