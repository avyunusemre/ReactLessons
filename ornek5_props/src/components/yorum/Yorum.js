import React from "react";
import yorumlar from "./data";

import "./Yorum.css";

function Yorum(props) {
  const { ad, meslek, resim, yorum } = yorumlar[props.index];
  return (
    <div className="yorum-div">
      <h1>{ad}</h1>
      <h2>{meslek}</h2>
      <p>{yorum}</p>
      <img src={resim} alt="" />
    </div>
  );
}

export default Yorum;
