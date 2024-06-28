import React, { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import ExploreMenu from "../../Components/Exploremenu/exploremenu";
import Juicedisplay from "../../Components/Juicedisplay/Juicedisplay";
import Appdownloads from "../../Components/Appdownloads/Appdownloads";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <Juicedisplay category={category} />
      <Appdownloads />
    </div>
  );
};

export default Home;
