import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div className="container">
        <div className="cart-wrapper">
          <img
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            alt="Empty Cart"
          />
          <h2>
            Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz
            yoki to‘plamlarni ko‘rishingiz mumkin
          </h2>
          <Link className="cart-link" to="/">
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
