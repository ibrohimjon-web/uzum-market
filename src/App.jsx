import React, { useState } from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import NavbarMain from "./components/navbar/NavbarMain";
import FooterMain from "./components/footer/FooterMain";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Wishes from "./pages/wishes/Wishes";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import SingleCard from "./pages/singleRoute/SingleCard";

const App = () => {
  
    const location = useLocation();

  if (location.pathname.includes("/login")) {
    return <Login />
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
    </div>
  );
};

export default App;
