import React, {useState} from 'react';
import './Show.css';

function Show() {
  const [toggler, setToggler] = useState(false);
  
  const handleClick = () => {
    setToggler((prevState) => !prevState);
  };

  return (
    <div className='box'>
      <button onClick={handleClick}>show/hide</button>
      <div className={toggler ? 'inner-box' : ''}></div>
    </div>
  );
}

export default Show;