import React, {useContext, useEffect} from 'react';
import { giftsCtx } from '../App';
import Son from "./Son";

const Father = () => {

  const {setGifts} = useContext(giftsCtx);

  useEffect(() => {
    setGifts(['sweets', 'candy', 'toys', 'cars']);
  }, [setGifts]);
  
  return ( 
    <div>
      <Son />
    </div> 
  );
}
 
export default Father;