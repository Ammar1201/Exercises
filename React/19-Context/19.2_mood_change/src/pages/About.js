import React, {useContext} from 'react';
import { styles } from "../App";
import './style.css';

const About = () => {
  const ctx = useContext(styles);
  return ( 
    <div className={ctx.mood ? 'day' : 'night'}>
      <h1>About Page</h1> 
    </div>
  );
}
 
export default About;