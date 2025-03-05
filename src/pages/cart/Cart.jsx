import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decCart, incCart, removeCart } from "../../context/cartSlice";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.carts.value);
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [location, setLocation] = useState("");

  const totalPrice = selectedItems.reduce((total, id) => {
    const item = cartItems.find((prod) => prod.id === id);
    return item ? total + item.price * item.quantity : total;
  }, 0);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedItems(selectAll ? [] : cartItems.map((item) => item.id));
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async () => {
    if (!name || !surname || !location) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    const botToken = "7883060261:AAFOYVyk-k_8wYRyVcz_z1SBtKMDqaC-F3s";
    const chatId = "5069790242";

    let message = `\ud83d\uded2 Buyurtma tafsilotlari:\n👤 Ism: ${name}\n👨‍👩‍👧 Familiya: ${surname}\n📍 Manzil: ${location}\n\n`;

    selectedItems.forEach((id) => {
      const item = cartItems.find((prod) => prod.id === id);
      if (item) {
        message += `📌 ${item.model} - ${item.quantity} dona - ${
          item.price * item.quantity
        } so'm\n`;
      }
    });
    message += `\n💰 Jami summa: ${totalPrice} so'm`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      message
    )}`;

    try {
      await fetch(url);
      alert("Buyurtma Telegramga yuborildi!");
    } catch (error) {
      alert("Xatolik yuz berdi");
    }
  };

  return (
    <div className="cart container">
      <div className="cart-wrapper">
        <h2 className="cart-title">Savat | {cartItems.length} mahsulot</h2>
        {cartItems.length > 0 ? (
          <>
            <div className="cart-select-all">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              <label>Hammasini tanlash</label>
            </div>

            {cartItems.map(
              (item) =>
                item.quantity > 0 && (
                  <div key={item.id} className="cart-item">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                      className="cart-checkbox"
                    />
                    <img src={item.url} alt={item.model} className="cart-img" />
                    <div className="cart-info">
                      <h3>{item.model}</h3>
                      <p className="cart-seller">Sotuvchi: {item.seller}</p>
                      <p className="cart-size">O‘lcham: {item.size}</p>
                      <div className="cart-price-section">
                        <span className="cart-price">
                          {item.price * item.quantity} so'm
                        </span>
                        {item.oldPrice && (
                          <span className="cart-old-price">
                            {item.oldPrice} so'm
                          </span>
                        )}
                      </div>
                      <div className="cart-controls">
                        <button
                          className="cart-btn"
                          onClick={() => dispatch(decCart(item))}
                        >
                          <FaMinus />
                        </button>
                        <span className="cart-quantity">{item.quantity}</span>
                        <button
                          className="cart-btn"
                          onClick={() => dispatch(incCart(item))}
                        >
                          <FaPlus />
                        </button>
                        <button
                          className="cart-btn delete"
                          onClick={() => dispatch(removeCart(item))}
                        >
                          <RiDeleteBin5Fill />
                        </button>
                      </div>
                    </div>
                  </div>
                )
            )}

            <div className="cart-summary">
              <input
                type="text"
                placeholder="Ismingiz"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Familyangiz"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Manzilingiz"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <h4>
                Topshirish punktiga yoki kuryer orqali bepul yetkazib berish
              </h4>
              <h4>Buyurtmangiz</h4>
              <p>{selectedItems.length} mahsulot</p>
              <h3>Jami: {totalPrice} so'm</h3>
              <h5>Tejaldi: {totalPrice * 0.1} so'm</h5>
              <button className="cart-checkout" onClick={handleSubmit}>
                Rasmiylashtirishga o'tish
              </button>
            </div>
          </>
        ) : (
          <div className="cart-empty">
            <img
              src="https://uzum.uz/static/img/shopocat.490a4a1.png"
              alt="Empty Cart"
            />
            <h2>Savat bo‘sh</h2>
            <Link className="cart-link" to="/">
              Bosh sahifaga qaytish
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
