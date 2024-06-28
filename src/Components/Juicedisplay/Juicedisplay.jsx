import React, { useContext } from "react";
import "./Juicedisplay.css";
import { Storecontext } from "../../Context/Storecontext";
import Juiceitem from "../Juiceitem/Juiceitem";

const Juicedisplay = ({ category }) => {
  const { juicelist } = useContext(Storecontext);
  return (
    <div className="Juicedisplay" id="Juicedisplay">
      <h2>Top drinks near you</h2>
      <div className="Juicedisplaylist">
        {juicelist.map((item, index) => {
          // for filtering
          if (category === "All" || category === item.category) {
            return (
              <Juiceitem
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Juicedisplay;
