import { useLoaderData } from "react-router-dom";

const Update = () => {
  const product = useLoaderData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const price = form.price.value;
    const type = form.type.value;
    const updatedProduct = { name, brand, rating, image, price, type };
    fetch(
      `https://fashion-and-apparel-server-wine.vercel.app/update/${product._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className=" flex justify-center items-center text-gray-400 md:w-[80%] my-10  lg:w-[70%] mx-auto">
      <form
        className="card-body  mx-auto   flex flex-col gap-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={product.name}
                className="loginCart input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="Brand Name"
                name="brand"
                defaultValue={product.brand}
                className="loginCart input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="image"
                defaultValue={product.image}
                className="loginCart input input-bordered"
                required
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                defaultValue={product.price}
                className="loginCart input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                placeholder="Rating"
                name="rating"
                defaultValue={product.rating}
                className="loginCart input input-bordered"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input
                type="text"
                placeholder="Type"
                name="type"
                defaultValue={product.type}
                className="loginCart input input-bordered"
                // required
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary mt-5">Update Product</button>
      </form>
    </div>
  );
};

export default Update;
