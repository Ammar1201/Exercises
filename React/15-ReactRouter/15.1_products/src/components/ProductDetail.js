import { useParams, Link, Redirect, Route } from "react-router-dom";
import {storeData} from '../store.js';

const ProductDetail = () => {
  const params = useParams();
  
  const findProduct = () => {
    return storeData.find(product => product.id === parseInt(params.id));
  };
  
  const product = findProduct();

  return ( 
    <div>
      {!product && <Route><Redirect to='/error' /></Route>}
      {product && <h2>{product.title}</h2>}
      {product && <h4>{product.size}</h4>}
      {product && <img src={product.imageUrl} alt="" />}
      {product && <h4>{product.price}</h4>}
      {product && <Link to='/products'>Back</Link>}
    </div> 
  );
}
 
export default ProductDetail;