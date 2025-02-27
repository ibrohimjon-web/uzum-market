import React from "react";
import { FaApple, FaFacebookF, FaGooglePlay, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css"
import { PiTelegramLogo } from "react-icons/pi";
import { FiFacebook } from "react-icons/fi";
import { RiTelegram2Fill, RiYoutubeLine } from "react-icons/ri";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="footer-top-wrapper">
          <div className="footer-top-1">
            <ul className="footer-top-links">
              <h3 className="footer-top-link-title">Biz haqimizda</h3>
              <li className="footer-top-link">
                <a href="" className="footer-top-link">
                  Topshirish punktlari
                </a>
              </li>
              <li className="footer-top-link">
                <a href="" className="footer-top-link">
                  Vakansiyalar
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top-2">
            <ul className="footer-top-links">
              <h3 className="footer-top-link-title">Foydalanuvchilarga</h3>
              <li className="footer-top-link">
                <a href="" className="footer-top-link">
                  Biz bilan bog'lanish
                </a>
              </li>
              <li className="footer-top-link">
                <a href="" className="footer-top-link">
                  Savol-Javob
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top-3">
            <ul className="footer-top-links">
              <h3 className="footer-top-link-title">Tadbirkorlarga</h3>
              <li className="footer-top-link">
                <a href="" className="footer-top-link">
                  Uzumda soting
                </a>
              </li>
              <li className="footer-top-link">
                <a href="" className="footer-top-link">
                  Sotuvchi kabinetiga kirish
                </a>
              </li>
              <li className="footer-top-link">
                <a href="" className="footer-top-link">
                  Topshirish punkitini ochish
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-top-4">
            <div className="footer-top-ilovalar-wrapper">
              <p>Ilovani yuklab olish</p>

              <div className="footer-top-ilovalar">
                <div className="footer-top-ilova-ios">
                  <FaApple className="footer-top-ilova-icon" /> AppStore
                </div>
                <div className="footer-top-ilova-android">
                  <FaGooglePlay className="footer-top-ilova-icon" /> Google Play
                </div>
              </div>
            </div>

            <div className="footer-top-tarmoqlar-wrapper">
              <p>Uzum ijtimoiy tarmoqlarda</p>
              <div className="footer-top-tarmoqlar">
                <div className="footer-instagram-icon-wrapper">
                  <FaInstagram className="footer-instagram-icon" />
                </div>
                <div className="footer-telegram-icon-wrapper">
                  <RiTelegram2Fill className="footer-telegram-icon" />
                </div>
                <div className="footer-facebook-icon-wrapper">
                  <FaFacebookF className="footer-facebook-icon" />
                </div>
                <div className="footer-youtube-icon-wrapper">
                  <FaYoutube className="footer-youtube-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
