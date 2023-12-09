import { useLoaderData } from "react-router-dom";
import Brand from "../../components/Brand/Brand";
import heroImg from "./image/heroimg.jpg";
import { FaDiscord } from "react-icons/fa6";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import "./Home.css";
// import { useEffect, useState } from "react";
const Home = () => {
  const brands = useLoaderData();
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  // // location testing
  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     const watchId = navigator.geolocation.watchPosition(
  //       function (position) {
  //         console.log("Latitude: " + position.coords.latitude);
  //         console.log("Longitude: " + position.coords.longitude);
  //         setLatitude(position.coords.latitude);
  //         setLongitude(position.coords.longitude);
  //       },
  //       function (error) {
  //         console.error("Error getting location: " + error.message);
  //       },
  //       {
  //         enableHighAccuracy: true,
  //         timeout: 5000,
  //         maximumAge: 0,
  //       }
  //     );
  //     return () => {
  //       navigator.geolocation.clearWatch(watchId);
  //     };
  //   } else {
  //     console.error("Geolocation is not supported by your browser");
  //   }
  // }, []);
  // useEffect(() => {
  //   fetch("http://localhost:5000/location", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ latitude, longitude }),
  //   });
  // }, [latitude, longitude]);

  return (
    <div>
      <div className="flex lg:flex-row my-10 flex-col gap-10 lg:gap-0 ">
        <div className="lg:w-3/5 flex flex-row justify-center items-center text-white">
          <div className="w-[70%] mx-auto space-y-3">
            <h1 className="text-5xl font-extrabold">
              Make Yourself a Brand with us
            </h1>
            <p className="text-gray-400">
              Think about your goals every day. Imagine your life once you have
              reached your professional goals, and use these images to motivate
              yourself. Be realistic.
            </p>
            <button className="upcoming py-2 px-4 rounded-full">
              See Upcoming Products
            </button>
          </div>
        </div>
        <div className="lg:w-2/5 h-[60vh] ">
          <img
            className="w-[90%] md:w-[70%] mx-auto  lg:w-[65%] rounded-full h-full"
            src={heroImg}
            alt=""
          />
        </div>
      </div>

      <div className="text-white text-center flex justify-center my-10 text-5xl font-bold">
        <h1 className="">Our Trusted Brands</h1>
      </div>
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {brands?.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
      <div className="text-center text-white mt-20 w-4/5 mx-auto leading-loose py-10">
        <h1 className="text-4xl font-bold space-y-5">CREATE YOUR OWN BRAND</h1>
        <p>
          Many people start a Brand to make money from a passion. Centering a
          Brand around something you love can make you excited to work every day
          and eager to overcome challenges. Credibility: Starting a Brand can
          help you build credibility and establish yourself as an expert in your
          industry
        </p>
        <button className="py-2 px-4 rounded-full text-white font-semibold mt-3 button">
          Learn More
        </button>
      </div>
      <div className="flex w-4/5 justify-evenly mx-auto items-center min-h-screen lg:flex-row flex-col lg:pt-0 pt-20 text-white">
        <div>
          <h1 id="h1" className=" text-5xl lg:text-6xl font-bold mb-4">
            GET IN TOUCH
          </h1>
          <p className="text-3xl font-bold text-white mb-10">
            Drop us a message for <br /> your future project
          </p>
          <p className="flex items-center gap-1 my-1">
            <AiFillInstagram className="text-pink-700 text-2xl"></AiFillInstagram>{" "}
            <span>ig_NeonOrganizer</span>
          </p>
          <p className="flex items-center gap-1 my-1">
            <AiFillYoutube className="text-pink-700 text-2xl"></AiFillYoutube>
            <span>Neon Events</span>
          </p>
          <p className="flex items-center gap-1 my-1">
            <FaDiscord className="text-pink-700 text-2xl"></FaDiscord>{" "}
            <span>Event Management Neon</span>
          </p>
          <p className="flex items-center gap-1 my-1">
            <AiFillLinkedin className="text-pink-700 text-2xl"></AiFillLinkedin>{" "}
            <span>Neon Events Organizer</span>
          </p>
        </div>
        <div className="my-10 lg:my-0 flex flex-col gap-2 lg:w-1/2 w-full">
          <input
            className="w-full textarea px-3 py-2 lg:w-[60%] mx-auto"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="w-full textarea px-3 py-2 lg:w-[60%] mx-auto"
            type="email"
            name=""
            placeholder="Email"
            id=""
          />
          <input
            className="w-full textarea px-3 py-2 lg:w-[60%] mx-auto"
            type="number"
            name=""
            placeholder="Phone Number"
            id=""
          />
          <textarea
            className="w-full textarea px-3 py-2 lg:w-[60%] mx-auto h-32 bg-transparent"
            name=""
            placeholder="Message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="Submit"
            id="submit"
            className="mt-5 bg-black text-white px-10 py-3 rounded-full hover:border-blue-700 hover:border  mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
