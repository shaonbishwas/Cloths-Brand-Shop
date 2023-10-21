import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import { ToastContainer } from "react-toastify";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name, brand, image, rating, price, short_description, type } =
    product;
  const { notify } = useContext(AuthContext);
  const handleSubmit = () => {
    fetch("https://fashion-and-apparel-server-wine.vercel.app/addtocart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          notify("item Successfully added to the cart");
        }
      });
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="flex flex-col lg:flex-row my-10 w-4/5 text-white mx-auto gap-5 min-h-screen">
        <div className="lg:w-1/2 h-[500px]">
          <img src={image} className=" h-full mx-auto w-full" alt="" />
        </div>
        <div className="space-y-2 pt-10">
          <h1 className="text-white text-6xl font-bold">{name}</h1>
          <p className="text-xl font-semibold">
            <span className="text-gray-400">Brand :</span> {brand}
          </p>
          <p>{type}</p>
          <p>{short_description}</p>
          <p>${price}</p>
          <p>{rating}</p>
          <button
            className="btn bg-red-700 text-white border-none"
            onClick={handleSubmit}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
