import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Product from "../../components/Product/Product";

const BrandProducts = () => {
  const [products, setProducts] = useState([]);
  const brands = useLoaderData();
  const { name } = useParams();
  const brand = brands.find((b) => b.name === name);
  useEffect(() => {
    fetch(
      `https://fashion-and-apparel-server-6jdtzxnqu-shaon-bishwas-projects.vercel.app/products/${brand.name}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  // console.log(name, brand)
  if (products.length > 0) {
    return (
      <div className="lg:w-4/5 mx-auto">
        {/* --------------------carusal----------------------------------- */}
        <div className="carousel w-full h-[80vh]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={brand.adds[0]} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={brand.adds[1]} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={brand.adds[2]} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={brand.adds[3]} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        {/*-------------------- products of selected brand -----------------------*/}
        <div className="grid w-4/5 mx-auto lg:grid-cols-3 md:grid-cols-2 my-20 gap-5">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-3xl font-extrabold">
            {brand.name} brand do not have any available products
          </h1>
          <Link to="/addproducts">
            <button className="btn bg-sky-500 text-black font-semibold mt-5">
              Add products
            </button>
          </Link>
        </div>
      </div>
    );
  }
};

export default BrandProducts;
