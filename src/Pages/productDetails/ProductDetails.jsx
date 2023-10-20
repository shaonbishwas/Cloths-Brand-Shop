import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import { ToastContainer } from "react-toastify";



const ProductDetails = () => {
    const product = useLoaderData()
    const {name, brand, image, rating, price, short_description, type} = product;
    const {notify} = useContext(AuthContext)
    const handleSubmit = ()=>{
        fetch('http://localhost:5000/addtocart',{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true){
                notify("item Successfully added to the cart")
            }
        })
    }
    return (
        <>
        <ToastContainer></ToastContainer>
        <div className="flex lg:flex-row mt-10 w-4/5 mx-auto gap-5">
            <div className="w-1/2">
                <img src={image} className="h-4/5 mx-auto w-full" alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{rating}</p>
                <p>{brand}</p>
                <p>{type}</p>
                <p>{short_description}</p>
                <p>{price}</p>
                <button className="btn btn-primary" onClick={handleSubmit}>Add to Cart</button>
            </div>
        </div>
        </>
    );
};

export default ProductDetails;