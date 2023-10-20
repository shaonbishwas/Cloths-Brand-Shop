import { useLoaderData } from "react-router-dom";
import Brand from "../../components/Brand/Brand";
import heroImg from "./image/heroimg.jpg";
import './Home.css'
const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <div className="flex lg:flex-row my-10 ">
        <div className="w-3/5 flex justify-center items-center text-white">
          <div className="w-[70%] mx-auto space-y-3">
            <h1 className="text-5xl font-extrabold">Make Yourself a Brand with us</h1>
            <p className="text-gray-400">
              Think about your goals every day. Imagine your life once you have
              reached your professional goals, and use these images to motivate
              yourself. Be realistic.
            </p>
            <button className="upcoming py-2 px-4 rounded-full">See Upcoming Products</button>
          </div>
        </div>
        <div className="w-2/5 h-[60vh]">
          <img className="w-[65%] rounded-full h-full" src={heroImg} alt="" />
        </div>
      </div>

      <div className="w-4/5 mx-auto grid grid-cols-3 gap-10">
        {brands?.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Home;
