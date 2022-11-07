import React, {useState} from 'react';
import './Counter.css';

function Counter(props) {
  const [counter, setCounter] = useState(props.counter);
  const [color, setColor] = useState(props.color);
  
  const handleClickIncrement = () => {
    if(counter > -1) {
      setColor('green');
    }

    if(counter === -1) {
      setColor('');
    }

    if(counter < 10) {
      setCounter(counter + 1);
    }
  };

  const handleClickDecrement = () => {
    if(counter < 1) {
      setColor('red');
    }

    if(counter === 1) {
      setColor('');
    }

    if(counter > -10) {
      setCounter(counter - 1);
    
    }
  };

  return (
    <div>
      <button onClick={handleClickDecrement}>decrement</button>
      <label className={color}>{counter}</label>
      <button onClick={handleClickIncrement}>increment</button>
    </div>
  );
}

export default Counter;