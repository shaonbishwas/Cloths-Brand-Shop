import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './Product.css'

const Product = ({ product }) => {
  return (
    <div className="card card-compact shadow-xl text-white">
      <figure>
        <img src={product.image} className="h-[300px] w-full" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h1 className="card-title text-2xl">{product.name}</h1>
        <h1 className="font-semibold text-xl text-gray-400">{product.brand}</h1>
        <h1>{product.type}</h1>
        <h1>${product.price}</h1>
        <h1>{product.rating}/5</h1>
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
