import { useLoaderData } from "react-router-dom";
import MycartProduct from "../../components/MycartProduct/MycartProduct";


const MyCart = () => {
    const products = useLoaderData()
    return (
        <div className="h-[80vh] text-center">
            {
                (products.length>0)? <div>
                    {
                        products.map((product)=> <MycartProduct key={product._id} product={product}></MycartProduct>)
                    }
                </div> : <h1>no data</h1>
            }
        </div>
    );
};

export default MyCart;