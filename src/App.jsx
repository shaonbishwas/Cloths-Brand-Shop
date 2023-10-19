import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
    <Navbar></Navbar>
      {products?.map((p) => (
        <div key={p._id}>
          <h1>{p.name}</h1>
          <h1>{p.brand_name}</h1>
          <h1>{p._id}</h1>
        </div>
      ))}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
