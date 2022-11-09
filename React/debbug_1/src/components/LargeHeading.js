import React from 'react';

//* destructure children {children} not children without {} 
const LargeHeading = ({children}) => {
  return <h2>{children}</h2>;
};

// added export default
export default LargeHeading;
