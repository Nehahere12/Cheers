import React, { useContext } from "react";
import "./Placeorder.css";
import { Storecontext } from "../../Context/Storecontext";

const Placeorder = () => {
  const { gettotalcartamount } = useContext(Storecontext);
  return (
    <form className="Placeorder">
      <div className="placeorderleft">
        <p className="title">Delivery information</p>
        <div className="multifields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multifields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multifields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="placeorderright">
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
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
