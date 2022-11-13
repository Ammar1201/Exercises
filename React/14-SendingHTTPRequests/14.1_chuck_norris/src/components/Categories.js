import React, {useEffect, useState} from 'react';
import './Categories.css';

const Categories = ({getCategory}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://api.chucknorris.io/jokes/categories');
        if(!res.ok) {
          throw Error('Couldn\'t fetch categories');
        }
        const data = await res.json();
        setCategories(data);
      }
      catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const clickHandle = ({target}) => {
    getCategory(target.textContent);
  };

  return ( 
    <div className='categories'>
      {categories.map(category => <button key={category} onClick={clickHandle}>{category}</button>)}
    </div> 
  );
}
 
export default Categories;