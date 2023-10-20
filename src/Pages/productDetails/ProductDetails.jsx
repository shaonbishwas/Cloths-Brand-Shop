import { useLoaderData } from "react-router-dom";



const ProductDetails = () => {
    const product = useLoaderData()
    const {name, brand, image, rating, price, short_description, type} = product;
    const handleSubmit = ()=>{
        fetch('http://localhost:5000/addtocart',{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
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
    );
};

export default ProductDetails;