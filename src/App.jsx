import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FooterMain from "./components/footer/FooterMain";
import NavbarMain from "./components/navbar/NavbarMain";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import SingleCard from "./pages/singleRoute/SingleCard";
import Wishes from "./pages/wishes/Wishes";

const App = () => {
  const location = useLocation();

  if (location.pathname.includes("/login")) {
    return <Login />;
  }

  return (
    <div>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/product/:id" element={<SingleCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <FooterMain />
      <ToastContainer />
    </div>
  );
};

export default App;
