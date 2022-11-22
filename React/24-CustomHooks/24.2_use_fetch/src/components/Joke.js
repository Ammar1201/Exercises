import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const Joke = () => {
  const [joke, setJoke] = useState('');

  const { data, fetchData } = useFetch('https://api.jokes.one/jod')

  useEffect(() => {
    fetchData();
  }, [fetchData])

  
  const getJoke = () => {
    setJoke(data.contents.jokes[0].joke.text);
  };

  return ( 
    <div>
      <button onClick={getJoke}>Get a joke</button>
      <p>{joke}</p>
    </div> 
  );
}
 
export default Joke;