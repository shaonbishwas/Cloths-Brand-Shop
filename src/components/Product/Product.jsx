import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="card card-compact shadow-xl">
      <figure>
        <img src={product.image} className="h-[300px] w-full" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{product.name}</h1>
        <h1>{product.brand}</h1>
        <h1>{product.type}</h1>
        <h1>{product.price}</h1>
        <h1>{product.rating}</h1>
        <div className="card-actions justify-end">
          <Link to={`/productdetails/${product._id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
          <Link to={`/update/${product._id}`}>
            <button className="btn btn-secondary">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
