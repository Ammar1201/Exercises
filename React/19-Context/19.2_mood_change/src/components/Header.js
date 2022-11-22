import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import { styles } from "../App";
import './Header.css';

const Header = () => {
  const ctx = useContext(styles);
  return (
    <header className={ctx.mood ? 'header headerDay' : 'header headerNight'}>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <button onClick={() => {ctx.setMood(prev => !prev)}}>Make {ctx.mood ? 'Night' : 'Day'}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
 
export default Header;