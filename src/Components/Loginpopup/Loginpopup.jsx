import React, { useState } from "react";
import "./Loginpopup.css";
import { assets } from "../../assets/assets";

const Loginpopup = ({ setShowlogin }) => {
  const [currentstate, setCurrentstate] = useState("Sign up");
  return (
    <div className="Loginpopup">
      <form action="" className="Loginpopupcontainer">
        <div className="Loginpopuptitle">
          <h2>{currentstate}</h2>
          <img
            onClick={() => setShowlogin(false)}
            src={assets.crossicon}
            alt=""
          />
        </div>
        <div className="Loginpopupinput">
          {currentstate === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>
          {currentstate === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="Loginpopupcondition">
          <input type="checkbox" required />
          <p>By continuing,I agree to the terms of use and privacy policy.</p>
        </div>
        {currentstate === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentstate("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Alredy have an account?
            <span onClick={() => setCurrentstate("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
