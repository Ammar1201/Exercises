import './Nav.css';
import {getFirstToUpper} from '../../utils/carsObj.utils';

const Nav = ({departments}) => {
  return (
    <nav className='nav'>
      <ul className='nav__ul'>
      {departments.map(name => <li key={name} className='nav__li'>{getFirstToUpper(name)}</li>)}
      </ul>
    </nav>
  )
}
 
export default Nav;