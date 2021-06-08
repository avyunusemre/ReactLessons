import React from "react";

import Mesaj from "./Mesaj";

const Kisi = (props) => {
  return (
    <div>
      <Mesaj ad={props.ad} />
      <h2>{props.ad}</h2>
      <img src={props.resim} alt="" />
      <h3>Tel : {props.telefon}</h3>
      <h4>Ara beni!</h4>
    </div>
  );
};

export default Kisi;
