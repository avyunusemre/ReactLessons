import React from "react";
import ReactDOM from "react-dom";

//? React'da JSX olarak adlandırılan bir söz dizimi kullanılır
//? Bu söz dizimi JS'ye benzese de bazı farklılıkları vardır.
//? İçerisinde doğrudan HTML kodları kullanılabilir.

//* Komponent icerisinde inline stillendirme yapılabilir.
//* Stillendirmede yazım key-value seklindedir.
//* Ayrıca key isimlerinde JS'de oldugu gibi camelCase kullanılır

const pStil = {
  color: "purple",
  marginTop: "40px",
  fontFamily: "tahoma",
  border: "2px solid blue",
};

function Selamla() {
  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "grey" }}>
        React Dersimize Hoşgeldiniz.
      </h1>
      <p style={pStil}>Bu dersimizde react komponentlerini tanıyacağız.</p>
    </div>
  );
}

export default Selamla;
