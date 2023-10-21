import PropTypes from "prop-types";

const MycartProduct = ({ product }) => {
  const handleDelete = () => {
    fetch(
      `https://fashion-and-apparel-server-wine.vercel.app/delete/${product._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          window.location.reload();
        }
      });
  };
  return (
    <div className="flex lg:h-[200px] md:h-[200px] bg-white p-1 rounded-xl gap-2">
      <div className="w-[200px]">
        <img src={product.image} className="w-full h-full rounded-xl" alt="" />
      </div>
      <div className="text-left ">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <h1 className="font-bold text-gray-600">{product.brand}</h1>
        <h1 className="font-bold">{product.type}</h1>
        <h1 className="font-semibold">${product.price}</h1>
        <h1>{product.rating} / 5</h1>
        <button
          onClick={handleDelete}
          className="mt-1 bg-red-600 text-white border-none py-2 px-5 rounded-xl"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

MycartProduct.propTypes = {
  product: PropTypes.object,
};
export default MycartProduct;
