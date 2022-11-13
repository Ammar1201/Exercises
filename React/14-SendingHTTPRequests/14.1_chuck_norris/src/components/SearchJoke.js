import React, {useRef, useState} from 'react';
import './SearchJoke.css';

const SearchJoke = () => {
  const searchInputRef = useRef();
  const [jokes, setJokes] = useState([]);

  const fetchJoke = async () => {
    try {
      const res = await fetch('https://api.chucknorris.io/jokes/search?query=' + searchInputRef.current.value);
      if(!res.ok) {
        throw Error('Couldn\'t fetch joke');
      }
      const data = await res.json();
      setJokes(data.result);
    }
    catch (err) {
      console.log(err);
    }
  };

  const searchJoke = () => {
    fetchJoke();
  };

  const searchJokeEnter = ({key}) => {
    if(key === 'Enter') {
      fetchJoke();
    }
  };

  return (
    <div className='search_joke'>
      <h2>or.. You can search for a joke :)</h2>
      <input type="text" ref={searchInputRef} onKeyDown={searchJokeEnter} />
      <button onClick={searchJoke}>Search</button>
      <div className='jokes'>
        {jokes.map(joke => <p>{joke.value}</p>)}
      </div>
    </div>
  );
}
 
export default SearchJoke;