import { Link, Redirect, Route, useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state;

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