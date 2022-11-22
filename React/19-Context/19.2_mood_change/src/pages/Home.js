import React, {useContext} from 'react';
import { styles } from "../App";
import './style.css';

const Home = () => {
  const ctx = useContext(styles);
  return ( 
    <div className={ctx.mood ? 'day' : 'night'}>
      <h1>Home Page</h1> 
    </div>
  );
}
 
export default Home;