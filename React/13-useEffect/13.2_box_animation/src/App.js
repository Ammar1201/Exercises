import React, {useState, useEffect, Fragment} from 'react';
import Box from "./components/Box";

const App = () => {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    setTimeout(() => {setShowBox(true);}, 1000);
    setTimeout(() => {setShowBox(false);}, 4000);
  }, []);

  return (
    <Fragment>
      {showBox && <Box />}
    </Fragment>
  )
}

export default App;
