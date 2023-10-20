
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({product}) => {
    return (
        <div>
            <div>
            <img src={product.image} className="w-full h-full" alt="" />
            </div>
            <div>
            <h1>{product.name}</h1>
            <h1>{product.brand}</h1>
            <h1>{product.type}</h1>
            <h1>{product.price}</h1>
            <h1>{product.rating}</h1>
            </div>
            <div>
                <Link to={`/productdetails/${product._id}`}><button className="btn btn-primary">Details</button></Link>
                <Link to={`/update/${product._id}`}><button className="btn btn-secondary" >Update</button></Link>
            </div>
        </div>
    );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;