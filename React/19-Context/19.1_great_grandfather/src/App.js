import React, {createContext, useState} from 'react';
import GrandFather from "./components/GrandFather";

export const giftsCtx = createContext([]);

const App = () => {
  const [gifts, setGifts] = useState([]);

  return <h1>
    <giftsCtx.Provider value={{gifts, setGifts}}>
      <GrandFather />
    </giftsCtx.Provider>
  </h1>;
}

export default App;