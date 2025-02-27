import "./Product.css";
import { DATA } from "../../mock/product.js";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product-wrapper">
          {DATA.map((item, index) => {
            return (
              <div key={index} className="product-item">
                <CiHeart className="product-heart" />
                <img className="product-img" src={item.url} alt={item.model} />
                <Link to={`product/${item.id}`}>
                  <h3>{item.model}</h3>
                  <p>{item.category}</p>
                  <mark className="product-mark">{item.oyiga} so'm/oyiga</mark>
                  <del className="product-del">{item.del}</del>
                  <span className="product-price">{item.price}</span>
                </Link>
                <div className="product-buy-wrapper">
                  <FaCartPlus className="product-buy" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Product