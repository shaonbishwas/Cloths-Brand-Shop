

const AddProducts = () => {
  const handleSubmit = e=>{
    e.preventDefault()
    const form = e.target.type.value;
    console.log(form)
  }
    return (
        <div>
            <form className="card-body  w-4/5 mx-auto" onSubmit={handleSubmit}>
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
                  className="loginCart input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  name="price"
                  className="loginCart input input-bordered"
                  required
                />
              </div>
              </div>
              <div className="w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  placeholder="Rating"
                  name="rating"
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
                  className="loginCart input input-bordered"
                  // required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Write Description"
                  name="description"
                  className="loginCart input input-bordered h-32"
                  required
                />
              </div>
              </div>
              </div>
              <button className="btn btn-primary mt-5">Add Product</button>
              </form>
        </div>
    );
};

export default AddProducts;