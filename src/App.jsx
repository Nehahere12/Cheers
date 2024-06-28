import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Placeorder from "./Pages/Placeorder/Placeorder";
import Footer from "./Components/Footer/Footer";
import Loginpopup from "./Components/Loginpopup/Loginpopup";
import Private from "./Pages/Private/Private";

const App = () => {
  const [showlogin, setShowlogin] = useState(false);
  return (
    <>
      {showlogin ? <Loginpopup setShowlogin={setShowlogin} /> : null}
      <div className="app">
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
          <Route path="/about" element={<About />} />
          <Route path="/private" element={<Private />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
