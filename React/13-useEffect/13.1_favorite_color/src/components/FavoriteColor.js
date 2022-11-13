import React, {useEffect, useState} from 'react';

const FavoriteColor = () => {
  const [favoriteColor, setFavoriteColor] = useState('');
  useEffect(() => {
    setTimeout(() => {setFavoriteColor('Blue');}, 1000);
  }, [favoriteColor]);
  return <h1>My favorite color is: {favoriteColor}</h1>;
}
 
export default FavoriteColor;