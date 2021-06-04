import React from "react";

import "./saat.css";

function Saat() {
  const tarih = new Date();
  const saatString = tarih.toLocaleTimeString();
  const tarihString = tarih.toLocaleDateString();
  const suAnkiSaat = tarih.getHours();
  console.log(suAnkiSaat);

  let mesaj = "";
  const mesajStil = {
    color: "",
  };

  if (suAnkiSaat < 4) {
    mesaj = "İyi geceler";
    mesajStil.color = "red";
  } else if (suAnkiSaat < 12) {
    mesaj = "Günaydın";
    mesajStil.color = "green";
  } else if (suAnkiSaat < 18) {
    mesaj = "Tünaydın";
    mesajStil.color = "blue";
  } else {
    mesaj = "İyi akşamlar";
    mesajStil.color = "orange";
  }

  return (
    <div className="div">
      <h1 className="tarih">Tarih : {tarihString}</h1>
      <h2 className="saat">Saat : {saatString}</h2>
      <h2 style={mesajStil}>{mesaj}</h2>
      <img
        className="resim"
        src="https://images.pexels.com/photos/1198264/pexels-photo-1198264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="saat"
      />
    </div>
  );
}

export default Saat;
