import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch(
      "https://fashion-and-apparel-server-a4t92rbl6-shaon-bishwas-projects.vercel.app/products"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <h1>Vite + React</h1>
      {products?.map((p) => (
        <div key={p._id}>
          <h1>{p.name}</h1>
          <h1>{p.brand_name}</h1>
          <h1>{p._id}</h1>
        </div>
      ))}
      <Footer></Footer>
    </>
  );
}

export default App;
