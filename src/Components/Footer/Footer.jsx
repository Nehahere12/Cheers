import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="Footercontent">
        <div className="Footercontentleft">
          <h2 className="logo">Cheers</h2>
          <p>
            "Stay refreshed and rejuvenated with every sip. Visit us again for
            more delightful flavors! 🍹"
          </p>
          <div className="Footersocialicons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.fbicon} alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.licon} alt="LinkedIn" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.ticon} alt="Twitter" />
            </a>
          </div>
        </div>
        <div className="Footercontentcenter">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">About us </Link>
            </li>
            <li>
              <Link to="/cart">Delivery</Link>
            </li>
            <li>
              {" "}
              <Link to="/private">Privacy policy </Link>
            </li>
          </ul>
        </div>
        <div className="Footercontentright">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456--7890</li>
            <li>contact@cheers.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="Footercopyright">
        Copyright 2024 @ Cheers.com-All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
