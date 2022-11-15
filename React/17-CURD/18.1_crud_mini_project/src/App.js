import React, {Fragment} from 'react';
import Info from './components/Info';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Info />
      <div className='search'>
        <label htmlFor="">Search User:</label>
        <input type="text" />
      </div>
    </Fragment>
  );
}

export default App;