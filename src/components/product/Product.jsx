import { CiHeart } from "react-icons/ci";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { incCart } from "../../context/cartSlice.js";
import { addToWishies, removeFromWishies } from "../../context/likeSlice";
import { DATA } from "../../mock/product.js";
import "./Product.css";

const Product = () => {
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.likes.value);

  const handleLike = (item) => {
    if (wishes.some((el) => el.id === item.id)) {
      dispatch(removeFromWishies(item));
    } else {
      dispatch(addToWishies(item));
    }
  };

  return (
    <div className="product">
      <div className="container">
        <div className="product-wrapper">
          {DATA.map((item) => {
            const isLiked = wishes.some((el) => el.id === item.id);
            return (
              <div key={item.id} className="product-item">
                <FaHeart
                  className={`product-heart ${isLiked ? "liked" : "like"}`}
                  onClick={() => handleLike(item)}
                />
                <Link to={`product/${item.id}`}>
                  <img
                    className="product-img"
                    src={item.url}
                    referrerPolicy="no-referrer"
                    alt={item.model}
                  />
                </Link>
                <Link to={`product/${item.id}`}>
                  <h3>{item.model}</h3>
                  <p>{item.category}</p>
                  <mark className="product-mark">{item.oyiga} so'm/oyiga</mark>
                  <del className="product-del">{item.del}</del>
                  <span className="product-price">{item.price}</span>
                </Link>
                <div className="product-buy-wrapper">
                  <FaCartPlus
                    className="product-buy"
                    onClick={() => dispatch(incCart(item))}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
