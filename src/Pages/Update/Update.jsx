import { useLoaderData } from "react-router-dom";

const Update = () => {
  const product = useLoaderData();
  const handleSubmit = (e) => {};
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <form className="card-body  w-4/5 mx-auto " onSubmit={handleSubmit}>
        <div className="flex lg:flex-row gap-5">
          <div className="w-1/2">
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
                name="photourl"
                defaultValue={product.image}
                className="loginCart input input-bordered"
                required
              />
            </div>
          </div>
          <div className="w-1/2">
            
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
