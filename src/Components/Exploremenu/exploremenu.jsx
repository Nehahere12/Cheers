import React, { useState } from "react";
import "./ExploreMenu.css";
import { menulist } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div>
      <div className="exploremenu" id="exploremenu">
        <h1>Explore our menu</h1>
        <p className="exploremenutext">
          Welcome to our juice drink store! We're delighted to offer you a
          refreshing selection of the finest shakes, juices, and beverages. Come
          in and enjoy a vibrant array of flavors, crafted with love and served
          with a smile. Sip, savor, and let our delicious drinks make your day
          special!
        </p>
        <div className="exploremenulist">
          {menulist.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menuname ? "All" : item.menuname
                  )
                }
                key={index}
                className="exploremenulistitem"
              >
                <img
                  className={category === item.menuname ? "active" : ""}
                  src={item.menuimage}
                  alt=""
                />
                <p>{item.menuname}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ExploreMenu;
