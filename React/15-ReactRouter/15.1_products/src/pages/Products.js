import React, {useState} from 'react';
import {storeData} from '../store.js';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const [store, setStore] = useState(storeData);
  return ( 
  <div>
    <h1>Products</h1>
    <div className='links'>
      {store.map(({title, id}) => {
        // return <Link to={`/products/${id}`} key={id}>{title}</Link>
        return <Link to={{pathname:`/products/${id}`, state: store[id - 1]}} key={id}>{title}</Link>
      })}
    </div>
  </div> 
  );
}
 
export default Products;