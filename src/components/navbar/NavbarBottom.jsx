import React from "react";

const navItems = [
  {
    title: "Hafta tovarlari",
    img: "https://images-cdn.ubuy.co.in/668b2a7d63e46b416e19d98c-funiverse-bulk-25-pack-of-gold-star.jpg",
    link: "#",
  },
  {
    title: "Tugatish",
    img: "https://www.uchmet.ru/upload/iblock/c72/107_1072906_80_80_discount_png-_3_.png",
    link: "#",
  },
  {
    title: "Har kuni foyda",
    img: "https://www.shutterstock.com/image-vector/true-check-mark-vector-design-260nw-553874140.jpg",
    link: "#",
  },
];

const categoryLinks = [
  "Elektronika",
  "Kiyim",
  "Maishiy",
  "Poyabzal",
  "Aksasuarlar",
  "Yana ➕"
];

const NavbarBottom = () => {
  return (
    <div className="navbar-bottom">
      <div className="container">
        <div className="navbar-bottom-wrapper">
          {/* Aksiya bo'limi */}
          <ul className="navbar-bottom-aksiya-links">
            {navItems.map((item, index) => (
              <li key={index} className="navbar-bottom-aksiya-link">
                <a href={item.link} className="navbar-bottom-link">
                  <img src={item.img} alt={item.title} />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Kategoriya bo'limi */}
          <ul className="navbar-bottom-links">
            {categoryLinks.map((category, index) => (
              <li key={index} className="navbar-bottom-link">
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
