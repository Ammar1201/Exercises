import React, {useState} from 'react';
import './Counter.css';

function Counter() {
  const [counter, setCounter] = useState(1);
  
  const handleClick = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>increment</button>
      <label>{counter}</label>
    </div>
  );
}

export default Counter;