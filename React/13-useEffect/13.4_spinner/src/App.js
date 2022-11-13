import React, {useState, useEffect, Fragment} from 'react';
import Spinner from "./components/Spinner";

const App = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 3000);
  });

  return ( 
    <Fragment>
      {showSpinner && <Spinner /> }
    </Fragment>
  );
}

export default App;