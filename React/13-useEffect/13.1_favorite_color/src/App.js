import React, {useState, useEffect} from 'react';

const App = () => {
  const [favoriteColor, setFavoriteColor] = useState('');
  useEffect(() => {
    setFavoriteColor('Blue');
  }, [favoriteColor]);
  return <h1>My favorite color is: {favoriteColor}</h1>;
}

export default App;
