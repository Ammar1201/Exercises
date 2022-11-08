import Box4 from './Box4';
import './main.css';

function Box3({style}) {
  return (
    <div className='box3' style={style}>
      <Box4 style={{backgroundColor: 'purple'}} />
      <Box4 style={{backgroundColor: 'purple'}} />
    </div>
  );
}

export default Box3;