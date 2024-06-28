import { createContext, useEffect, useState } from "react";
import { juicelist } from "../assets/assets";
import { useSearchParams } from "react-router-dom";

export const Storecontext = createContext(null);

const StorecontextProvider = (props) => {
  const [cartitems, setCartitems] = useState({});

  const addtocart = (itemid) => {
    setCartitems((prev) => {
      if (!prev[itemid]) {
        return { ...prev, [itemid]: 1 };
      } else {
        return { ...prev, [itemid]: prev[itemid] + 1 };
      }
    });
  };

  const removefromcart = (itemid) => {
    setCartitems((prev) => {
      if (prev[itemid] > 1) {
        return { ...prev, [itemid]: prev[itemid] - 1 };
      } else {
        const newCart = { ...prev };
        delete newCart[itemid];
        return newCart;
      }
    });
  };

  const gettotalcartamount = () => {
    let totalamount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = juicelist.find((product) => product.id === item);
        totalamount += iteminfo.price * cartitems[item];
      }
    }
    return totalamount;
  };

  const contextValue = {
    juicelist,
    cartitems,
    addtocart,
    removefromcart,
    gettotalcartamount,
  };

  return (
    <Storecontext.Provider value={contextValue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default StorecontextProvider;
