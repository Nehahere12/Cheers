import React from "react";
import "./Appdownloads.css";
import { assets } from "../../assets/assets";

const Appdownloads = () => {
  return (
    <div className="Appdownload" id="Appdownload">
      <p>
        For better experience download <br /> Cheers app
      </p>
      <div className="Appdownloadplatforms">
        <img src={assets.playstore} alt="" />
        <img src={assets.appstore} alt="" />
      </div>
    </div>
  );
};

export default Appdownloads;
