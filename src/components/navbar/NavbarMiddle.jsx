import React from "react";
import { Link } from "react-router-dom";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { TfiBag } from "react-icons/tfi";
import navbarLogo from "../../assets/UzumUz.svg";

const NavbarMiddle = () => {
  return (
    <div className="navbar-middle">
      <div className="container">
        <div className="navbar-middle-wrapper">
          <div className="navbar-middle-logo-wrapper">
            <Link to="/" className="navbar-middle-logo-link">
              <img
                src={navbarLogo}
                alt="Navbar Logo"
                className="navbar-middle-logo"
              />
            </Link>

            <button className="navbar-middle-btn">
              <TfiBag />
              <span className="navbar-middle-btn-text">Katalog</span>
            </button>
          </div>

          <div className="navbar-middle-search">
            <input type="text" placeholder="Mahsulot va turkumlar izlang" />
            <button>
              <CiSearch />
            </button>
          </div>

          <ul className="navbar-middle-collection">
            <li>
              <Link to="/login">
                <CiUser className="navbar-middle-collection-icon" />
                <span>Kirish</span>
              </Link>
            </li>
            <li>
              <Link to="/wishes">
                <CiHeart className="navbar-middle-collection-icon" />
                <span>Saralangan</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <IoBagOutline className="navbar-middle-collection-icon" />
                <span>Savat</span>
              </Link>
            </li>
          </ul>

          {/* ...................Mobil versiya navbar................... */}
          <ul className="navbar-middle-collection-phone">
            <li>
              <Link to="/">
                <IoHomeOutline className="navbar-middle-collection-phone-icon" />
                <span>Bosh sahifa</span>
              </Link>
            </li>
            <li>
              <Link to="/catalog">
                <RiMenuSearchLine className="navbar-middle-collection-phone-icon" />
                <span>Katalog</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <MdOutlineShoppingBag className="navbar-middle-collection-phone-icon" />
                <span>Savat</span>
              </Link>
            </li>
            <li>
              <Link to="/wishes">
                <IoIosHeartEmpty className="navbar-middle-collection-phone-icon" />
                <span>Saralangan</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <CiUser className="navbar-middle-collection-phone-icon" />
                <span>Kabinet</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
