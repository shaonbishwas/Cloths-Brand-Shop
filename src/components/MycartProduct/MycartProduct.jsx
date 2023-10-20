import PropTypes from "prop-types";

const MycartProduct = ({product}) => {
    const handleDelete = ()=>{
        fetch(`http://localhost:5000/delete/${product._id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <div>
            <img src={product.image} className="" alt="" />
            </div>
            <div>
            <h1>{product.name}</h1>
            <h1>{product.brand}</h1>
            <h1>{product.type}</h1>
            <h1>{product.price}</h1>
            <h1>{product.rating}</h1>
            <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

MycartProduct.propTypes = {
    product: PropTypes.object,
  };
export default MycartProduct;