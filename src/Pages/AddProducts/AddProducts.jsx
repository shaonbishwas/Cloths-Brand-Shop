const AddProducts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const price = form.price.value;
    const type = form.type.value;
    const short_description = form.short_description.value;
    const addProduct = {
      name,
      brand,
      rating,
      image,
      price,
      type,
      short_description,
    };
    console.log(addProduct);
    fetch("https://fashion-and-apparel-server-wine.vercel.app/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form className="card-body my-10 w-4/5 mx-auto" onSubmit={handleSubmit}>
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
                name="image"
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
          <div className="lg:w-1/2">
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
                <span className="label-text">description</span>
              </label>
              <textarea
                type="text"
                placeholder="Write description"
                name="short_description"
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
