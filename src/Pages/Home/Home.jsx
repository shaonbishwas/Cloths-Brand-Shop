import { useLoaderData } from "react-router-dom";
import Brand from "../../components/Brand/Brand";


const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <div className="w-4/5 mx-auto grid grid-cols-3 gap-10">
            {
                brands?.map((brand)=><Brand key={brand.id} brand={brand}></Brand>)
            }
            </div>
        </div>
    );
};

export default Home;