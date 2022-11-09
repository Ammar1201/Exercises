import React, {useRef} from 'react';
import visSrc from './videos/mov_bbb.mp4';

const App = () => {
  const vidRef = useRef();

  const playVideo = () => {
    vidRef.current.play();
  }

  const pauseVideo = () => {
    vidRef.current.pause();
  };
  
  return (
    <div> 
      <video ref={vidRef} width="600">
        <source src={visSrc} type="video/mp4" />
      </video>
      <br />
      <button onClick={playVideo}>play</button>
      <button onClick={pauseVideo}>pause</button>
    </div>
  )
}

export default App;
