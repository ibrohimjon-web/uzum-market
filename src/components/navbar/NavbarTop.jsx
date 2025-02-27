import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const languages = [
  { code: "uz", label: "O'zbekcha", flag: "https://flagcdn.com/w40/uz.png" },
  { code: "ru", label: "Русский", flag: "https://flagcdn.com/w40/ru.png" },
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
];

const NavbarTop = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="navbar-top">
      <div className="container">
        <div className="navbar-top-wrapper">
          {/* Chap tomon */}
          <div className="navbar-top-left">
            <div className="navbar-top-left-location">
              <a href="#">
                <CiLocationOn />
                <span>Toshkent</span>
              </a>
            </div>
            <div className="navbar-top-left-punkt">
              <a href="#">Topshirish punkiti</a>
            </div>
          </div>

          {/* O'ng tomon */}
          <div className="navbar-top-right">
            <div className="navbar-top-right-sotuv">
              <a className="color-pink" href="#">
                Sotuvchi bo'limi
              </a>
            </div>
            <div className="navbar-top-right-punkt">
              <a className="color-pink" href="#">
                Topshirish punktini ochish
              </a>
            </div>
            <div className="navbar-top-right-question">
              <a href="#">Savol-Javob</a>
            </div>
            <div className="navbar-top-right-buyurmalarim">
              <a href="#">Buyurmalarim</a>
            </div>

            {/* Til tanlash dropdown */}
            <div className="navbar-top-right-chose-lang">
              <div className="selected-lang" onClick={() => setIsOpen(!isOpen)}>
                <img src={selectedLang.flag} alt={selectedLang.label} />
                <span>{selectedLang.label}</span>
              </div>

              {isOpen && (
                <div className="language-dropdown">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="language-option"
                      onClick={() => handleSelect(lang)}
                    >
                      <img src={lang.flag} alt={lang.label} />
                      <span>{lang.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
