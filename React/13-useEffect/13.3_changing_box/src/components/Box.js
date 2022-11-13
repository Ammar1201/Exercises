import './Box.css';

const Box = ({color, radius}) => {
  return ( 
    <div className='box' style={{background: color, borderRadius: `${radius}%`}}></div>
  );
}
 
export default Box;