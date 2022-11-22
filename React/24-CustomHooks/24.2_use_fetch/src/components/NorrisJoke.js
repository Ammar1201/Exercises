// https://api.chucknorris.io/jokes/random

import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const NorrisJoke = () => {
  const [joke, setJoke] = useState('');

  const { data, fetchData } = useFetch('https://api.chucknorris.io/jokes/random')

  useEffect(() => {
    fetchData();
  }, [fetchData])

  
  const getJoke = () => {
    setJoke(data.value);
  };

  return ( 
    <div>
      <button onClick={getJoke}>Get a Norris Joke</button>
      <p>{joke}</p>
    </div> 
  );
}
 
export default NorrisJoke;