import { useLoaderData } from "react-router-dom";
import MycartProduct from "../../components/MycartProduct/MycartProduct";


const MyCart = () => {
    const products = useLoaderData()
    return (
        <div className="h-[100vh] text-center ">
            {
                (products.length>0)? <div className="grid grid-cols-2 gap-10 w-4/5 mx-auto my-10">
                    {
                        products.map((product)=> <MycartProduct key={product._id} product={product}></MycartProduct>)
                    }
                </div> : <div className=" h-full flex items-center justify-center text-white text-3xl font-bold"><h1>You Did not add any product yet</h1></div>
            }
        </div>
    );
};

export default MyCart;