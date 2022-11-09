import React, { useRef } from 'react';
import blackWhite1 from './img/blackWhite1.jpg';
import blackWhite2 from './img/blackWhite2.jpg';
import color1 from './img/color1.jpg';
import color2 from './img/color2.jpg';
import './App.css';


const App = () => {
  const img1Ref = useRef();
  const img2Ref = useRef();

  const mouseOverHandle = ({target}) => {
    if(target.id === 'img1') {
      img1Ref.current.src = color1;
    }
    else if(target.id === 'img2') {
      img2Ref.current.src = color2;
    }
  };

  const mouseOutHandle = ({target}) => {
    if(target.id === 'img1') {
      img1Ref.current.src = blackWhite1;
    }
    else if(target.id === 'img2') {
      img2Ref.current.src = blackWhite2;
    }
  };

  return <div>
    <img id='img1' ref={img1Ref} src={blackWhite1} alt="color1" onMouseOver={mouseOverHandle} onMouseOut={mouseOutHandle} />
    <img id='img2' ref={img2Ref} src={blackWhite2} alt="color2" onMouseOver={mouseOverHandle} onMouseOut={mouseOutHandle} />
  </div>
}

export default App;
