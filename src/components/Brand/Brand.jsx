
import PropTypes from "prop-types";
import {  useNavigate } from "react-router-dom";

const Brand = ({brand}) => {
    const navigate = useNavigate()
    const hadleClick = ()=>{
        navigate(`/brandproducts/${brand.name}`)
    }
    return (
        <div onClick={hadleClick}>
            <img src={brand.brand_img} className="w-full h-full" alt="" />
        </div>
    );
};

Brand.propTypes = {
    brand: PropTypes.object,
  };
export default Brand;