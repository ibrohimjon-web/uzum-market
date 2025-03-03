import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishies } from "../../context/likeSlice";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { incCart } from "../../context/cartSlice";
import "./Wishes.css";

const Wishes = () => {
  const wishes = useSelector((state) => state.likes.value);
  const dispatch = useDispatch();

  return (
    <div className="wishes">
      <div className="container">
        {wishes.length > 0 ? (
          <div className="wishes-wrapper">
            {wishes.map((item) => {
              const isLiked = wishes.some((el) => el.id === item.id);
              return (
                <div key={item.id} className="product-item">
                  {/* Yurak tugmasi */}
                  <FaHeart
                    className={`product-heart ${isLiked ? "liked" : "like"}`}
                    onClick={() => dispatch(removeFromWishies(item))}
                  />

                  {/* Mahsulot rasmi */}
                  <Link to={`product/${item.id}`}>
                    <img
                      className="product-img"
                      src={item.url}
                      alt={item.model}
                    />
                  </Link>

                  {/* Mahsulot ma'lumotlari */}
                  <Link to={`product/${item.id}`}>
                    <h3>{item.model}</h3>
                    <p>{item.category}</p>
                    <mark className="product-mark">
                      {item.oyiga} so'm/oyiga
                    </mark>
                    <del className="product-del">{item.del}</del>
                    <span className="product-price">{item.price}</span>
                  </Link>

                  {/* Savatga qo'shish tugmasi */}
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
        ) : (
          <div className="wishes-wrapper">
            <img
              src="https://uzum.uz/static/img/hearts.cf414be.png"
              alt="Heart Icon"
            />
            <h2>Sizga yoqqanini qoʻshing</h2>
            <p>
              Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha
              saralanganlar saqlanib qoladi.
            </p>
            <Link to="/login" className="wishes-link">
              Akkauntga kirish
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishes;
