import React, {useState} from 'react';
import './Counter.css';

function Counter(props) {
  const [counter, setCounter] = useState(props.counter);
  
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>increment</button>
      <label>{counter}</label>
    </div>
  );
}

export default Counter;