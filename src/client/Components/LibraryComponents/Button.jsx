import React from 'react';

// description: simple utility component that adds key button properties such
// as clicking the button on enter, tab index, and combining user entered classes
// classes utility button class

const Button = props => {
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.target.click();
    }
  };

  return (
    <div
      {...props}
      className={`${props.className} util__btn`}
      tabIndex='0'
      onKeyDown={handleKeyDown}
    >
      {props.children}
    </div>
  );
};

export default Button;
