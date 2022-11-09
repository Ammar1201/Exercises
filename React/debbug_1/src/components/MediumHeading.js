import React from 'react';

//* deconstruct props
const MediumHeading = ({action, text}) => {
  //* {text} instead of text without {}
  return <h1 onClick={action}>{text}</h1>;
};

export default MediumHeading;
