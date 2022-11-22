import React, {useContext} from 'react';
import { giftsCtx } from '../App';

const GrandSon = () => {

  const ctx = useContext(giftsCtx);

  return ( <div>
      gifts:	&nbsp;
      {ctx.gifts.map((gift, index) => <label key={index}>{gift}, 	&nbsp;</label>)}
    </div> 
  );
}
 
export default GrandSon;