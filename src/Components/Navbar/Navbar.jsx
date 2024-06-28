import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { Storecontext } from "../../Context/Storecontext";

const Navbar = ({ setShowlogin }) => {
  const [menu, setMenu] = useState("home");
  const { gettotalcartamount } = useContext(Storecontext);
  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="logo">Cheers</h2>
      </Link>
      <ul className="navbarmenu">
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#exploremenu"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#Appdownload"
          onClick={() => {
            setMenu("mobile");
          }}
          className={menu === "mobile" ? "active" : ""}
        >
          {" "}
          Mobile-app
        </a>
        <a
          href="#Footer"
          onClick={() => {
            setMenu("contact");
          }}
          className={menu === "contact" ? "active" : ""}
        >
          {" "}
          Contact-us
        </a>
      </ul>
      <div className="navbarright">
        <img src={assets.searchicon} alt="" />
        <div className="navbarsearchicon">
          <Link to="./cart">
            <img src={assets.basketicon} alt="" />
          </Link>
          <div className={gettotalcartamount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowlogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
