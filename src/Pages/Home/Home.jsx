import { useLoaderData } from "react-router-dom";
import Brand from "../../components/Brand/Brand";


const Home = () => {
    const brands = useLoaderData()
    return (
        <div>
            <div>
            {
                brands?.map((brand)=><Brand key={brand.id} brand={brand}></Brand>)
            }
            </div>
        </div>
    );
};

export default Home;