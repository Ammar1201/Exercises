import React, {useState} from 'react';
import './Counter.css';

function Counter(props) {
  const [counter, setCounter] = useState(0);
  
  const handleClick = ({target}) => {
    const addToCounter = target.id === 'inc' ? 1 : -1;
    const futureCounter = counter + addToCounter;
    if(futureCounter >= -10 && futureCounter <= 10) {
      setCounter(prevCounter => prevCounter + addToCounter);
    }
  };

  const setColor = (num) => {
    if(num > 0) {
      return 'green';
    }
    else if(num < 0) {
      return 'red';
    }
    else {
      return '';
    }
  };

  return (
    <div>
      <button id='dec' onClick={handleClick}>decrement</button>
      <label className={setColor(counter)}>{counter}</label>
      <button id='inc' onClick={handleClick}>increment</button>
    </div>
  );
}

export default Counter;