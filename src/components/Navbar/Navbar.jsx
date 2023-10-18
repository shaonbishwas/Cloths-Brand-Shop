import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/addproducts'>Add Products</NavLink>
            <NavLink to='/mycart'>My Cart</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Navbar;