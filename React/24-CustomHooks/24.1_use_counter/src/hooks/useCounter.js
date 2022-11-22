import {useState} from 'react';

const useCounter = (num = 0) => {
  const [counter, setCounter] = useState(num);

  const addOne = () => {
    setCounter(prev => prev + 1);
  };

  const removeOne = () => {
    setCounter(prev => prev - 1);
  };

  const double = () => {
    setCounter(prev => prev * prev);
  };

  const divide = () => {
    setCounter(prev => prev / 5);
  };

  return {counter, addOne, removeOne, double, divide};
}
 
export default useCounter;