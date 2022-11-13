import './App.css';
import React, {Fragment, useState} from 'react';
import Nav from "./nav/Nav";
import { carMarket } from "../carAgObj";
import { getFirstToUpper } from '../utils/carsObj.utils';
import LargeHeading from './LargeHeading/LargeHeading';

const App = () => {
  const [currentDepartment, setCurrentDepartment] = useState(null);

  return (
    <Fragment>
      <Nav departments={Object.keys(carMarket)} setCurrentDepartment={setCurrentDepartment} />
      <LargeHeading text={currentDepartment ? getFirstToUpper(currentDepartment) : 'Welcome to the car market'} />
    </Fragment>
  )
}

export default App;