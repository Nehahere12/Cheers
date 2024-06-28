import React, { useContext } from "react";
import "./Cart.css";
import { Storecontext } from "../../Context/Storecontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartitems, juicelist, removefromcart, gettotalcartamount } =
    useContext(Storecontext);
  const navigate = useNavigate();
  return (
    <div className="Cart">
      <div className="Cartitems">
        <div className="Cartitemstitle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {juicelist.map((item, index) => {
          if (cartitems[item.id] > 0) {
            return (
              <div>
                <div className="Cartitemstitle Cartitemsitem">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitems[item.id]}</p>
                  <p>${item.price * cartitems[item.id]}</p>
                  <p onClick={() => removefromcart(item.id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="Cartbottom">
        <div className="Carttotal">
          <h2>Cart total</h2>
          <div>
            <div className="Carttotaldetails">
              <p>Subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <div className="Carttotaldetails">
              <p>Delivery fee</p>
              <p>${gettotalcartamount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="Carttotaldetails">
              <b>Total</b>
              <b>
                ${gettotalcartamount() === 0 ? 0 : gettotalcartamount() + 2}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="Cartpromocode">
          <div>
            <p>If you have a promo code,Enter it here.</p>
            <div className="Cartpromocodeinput">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
