import React, {useEffect, useState} from 'react';
import './Joke.css';

const Joke = ({category}) => {
  const [joke, setJoke] = useState(category);

  useEffect(() => {
    const fetchJoke = async () => {
        try {
          const res = await fetch('https://api.chucknorris.io/jokes/random?category=' + category);
          if(!res.ok) {
            throw Error('Couldn\'t fetch joke');
          }
          const data = await res.json();
          setJoke(data.value);
        }
        catch (err) {
          console.log(err);
        }
      };
    fetchJoke();
  }, [category]);

  return ( 
    <div className='joke'>
      {joke && <p>{joke}</p>}
    </div> 
  );
}
 
export default Joke;