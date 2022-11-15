import React, {Fragment} from 'react';
import Info from "./components/Info";
import TODOForm from './components/TODOForm';

const App = () => {
  return (
    <Fragment>
      <Info />
      <TODOForm />
    </Fragment>
  );
}

export default App;
