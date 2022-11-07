import React, {useState} from 'react';
import './Show.css';

function Show() {
  const [hidden, setHidden] = useState('');
  const [showOrHide, setShowOrHide] = useState(true);
  
  const handleClick = () => {
    if(showOrHide) {
      setShowOrHide(false);
      setHidden(' hidden');
    }
    else {
      setShowOrHide(true);
      setHidden('');
    }
  };

  return (
    <div className='box'>
      <button onClick={handleClick}>show/hide</button>
      <div className={'inner-box' + hidden}></div>
    </div>
  );
}

export default Show;