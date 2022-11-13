import React, {useRef, useEffect, Fragment} from 'react';

const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Fragment>
      <h1>Hello, auto input focus</h1>
      <input type="text" ref={inputRef}/>
    </Fragment>
  )
}

export default App;