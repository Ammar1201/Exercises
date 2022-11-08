import Box2 from './Box2';
import './main.css';

function Box(props) {
  return (
    <div className='box1' style={props.style}>
      <Box2 style={{  backgroundColor: 'lightblue'}} />
    </div>
  );
}

export default Box;