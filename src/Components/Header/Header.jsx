import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header">
      <div className="headercontents">
        <h2>Order your favourite drink here</h2>
        <p>
          Welcome to Cheers! We're thrilled to have you here. Dive into our
          delightful selection of refreshing beverages, from freshly squeezed
          juices and invigorating mojitos to craft beers and luscious shakes.
          Each sip is crafted with care to bring you pure joy and satisfaction.
          Relax, unwind, and savor the flavors with us. Cheers to a wonderful
          experience!
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
};

export default Header;
