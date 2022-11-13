import './Nav.css';
import {getFirstToUpper} from '../../utils/carsObj.utils';

const Nav = ({departments, setCurrentDepartment}) => {
  return (
    <nav id='nav' className='nav'>
      <h2 onClick={() => {setCurrentDepartment(null)}}>Car Market</h2>
      <ul className='nav__ul'>
        {departments.map(name => <li key={name} className='nav__li'  onClick={() => {setCurrentDepartment(name)}} >{getFirstToUpper(name)}</li>)}
      </ul>
    </nav>
  )
}
 
export default Nav;