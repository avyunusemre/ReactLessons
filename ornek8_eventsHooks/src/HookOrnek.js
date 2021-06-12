import React from "react";
import { useState } from "react";

function HookOrnek() {
  // const [isim, setIsim] = useState("Can");
  // const [meslek, setMeslek] = useState("Developer");
  // const [yas, setYas] = useState("23");

  // const degistir = function () {
  //   setIsim("Ahmet");
  //   setMeslek("Grafiker");
  //   setYas("44");
  // };

  const [kisi, setKisi] = useState({
    isim: "Muhammet",
    meslek: "Tester",
    yas: 29,
  });

  const degistir = () => {
    setKisi({ isim: "Mehmet", meslek: "Devops", yas: 45 });
  };

  return (
    <div className="container text-center mt-4">
      {/* <h1>{isim}</h1>
      <h2>{meslek}</h2>
      <h2>{yas}</h2> */}
      <h1>{kisi.isim}</h1>
      <h2>{kisi.meslek}</h2>
      <h2>{kisi.yas}</h2>
      <button className="btn btn-outline-info" onClick={degistir}>
        Değiştir
      </button>
    </div>
  );
}

export default HookOrnek;
