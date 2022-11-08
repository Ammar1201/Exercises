import Box3 from './Box3';
import './main.css';

function Box2({style}) {
  return (
    <div className='box2' style={style}>
      <Box3 style={{backgroundColor: 'lightpink'}} />
    </div>
  );
}

export default Box2;