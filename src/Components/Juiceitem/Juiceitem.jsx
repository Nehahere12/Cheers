import React, { useContext, useState } from "react";
import "./Juiceitem.css";
import { assets } from "../../assets/assets";
import { Storecontext } from "../../Context/Storecontext";

const Juiceitem = ({ id, name, price, description, image }) => {
  const { cartitems, addtocart, removefromcart } = useContext(Storecontext);
  return (
    <div className="Juiceitem">
      <div className="Juiceitemimagecontainer">
        <img className="Juiceitemimage" src={image} alt={name} />
        {!cartitems[id] ? (
          <img
            className="add"
            onClick={() => addtocart(id)}
            src={assets.addwhiteicon}
            alt=" "
          />
        ) : (
          <div className="Juiceitemcounter">
            <img
              onClick={() => removefromcart(id)}
              src={assets.removeiconred}
              alt=""
            />
            <p>{cartitems[id]}</p>
            <img
              onClick={() => addtocart(id)}
              src={assets.addicongreen}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="Juiceiteminfo">
        <div className="Juiceitemnamerating">
          <p>{name}</p>
          <img src={assets.ratingstarts} alt="rating" />
        </div>
        <p className="Juiceitemdesc">{description}</p>
        <p className="Juiceitemprice">${price}</p>
      </div>
    </div>
  );
};

export default Juiceitem;
