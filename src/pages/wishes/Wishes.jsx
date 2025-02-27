import React from "react";
import { Link } from "react-router-dom";
import "./Wishes.css";

const Wishes = () => {
  return (
    <div className="wishes">
      <div className="container">
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
      </div>
    </div>
  );
};

export default Wishes;
