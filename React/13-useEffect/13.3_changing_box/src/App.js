import React, {useEffect, useState, Fragment} from 'react';
import Box from './components/Box';

const App = () => {
  const [color, setColor] = useState('red');
  const [counter, setCounter] = useState(1);
  const [radius, setRadius] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      setColor(`rgb(${red}, ${green}, ${blue})`);
      setCounter((prev) => prev + 1);
    }, 500);

    if(counter > 5) {
      setRadius(50);
    }

  }, [counter]);

  return (
    <Fragment>
      <Box color={color} radius={radius} />
    </Fragment>
  );
}

export default App;
