import React, {Fragment, useState} from 'react';
import Categories from './components/Categories';
import Joke from './components/Joke';
import './App.css';

const App = () => {
  const [category, setCategory] = useState(null);

  const getCategory = (category) => {
    setCategory(category);
  };

  return (
    <Fragment>
      <h1>Click any category below to show a random <span style={{color: 'red'}}>Chuck Norris</span> joke by <span style={{color: 'red'}}>Category</span></h1>
      <Categories getCategory={getCategory} />
      {category && <Joke category={category} />}
    </Fragment>
  )
}

export default App;