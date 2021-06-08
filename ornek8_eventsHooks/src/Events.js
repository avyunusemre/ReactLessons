import React from "react";

//* ====================== OLAYLAR (EVENTS) ============================
//* - Olaylar, Javascripttekine benzer olarak camelCase ile kullanilirlar.
//! - Event fonksiyonu yazilirken dikkat edilmelidir. Fonksiyon referans olarak
//!   gonderilmelidir. Ornegin:  onClick={handleTikla}
//* - Eger onClick={handleTikla()} seklinde yazilirsa sayfa her render edildiginde
//*   dogrudan calismis olur.
//? - Peki parametreli bir fonksiyon ise ne yapmak gerekir.
//? - Parametreli fonksiyonlar bir baska isimsiz fonksiyon ile cagrilabilir.
//* =====================================================================

function Events() {
  let baslik = "OLAYLAR";
  function handleTikla() {
    console.log("Tıkla Butonuna Tıklandı");
  }

  function handleYaz(isim) {
    console.log("Ben " + isim);
  }

  function handleDegistir() {
    baslik = "EVENTS";
    console.log("Değişti");
  }

  //?------------------------------------------------------------------
  //? SORU: Degistir Butonuna tiklandiginda baslik yazisini EVENTS olarak
  //?       degisitirmesini istiyoruz.
  //?-------------------------------------------------------------------
  //! - Degisikligi log'da gorsek de web sayfasında render edilmez.
  //* - Bunun sebebi REACT icin bu nesnenin hareketli bir nesne olup olmadigini
  //*   bilmemesidir. React minimum DOM islemi icin default olarak nesneleri
  //*   guncellemiyor gibi dusunebiliriz.
  //? - Guncellenecekleri (interaktif) biz ona bildirmeliyiz.
  //? - Bunun için iki yöntem kullanilmaktadir.
  //* 1. Statefull Nesneler kullanmak. Yani state'ler ile degisimi gostermek.
  //* 2. Hooks adi verilen fonksiyonel yaklasimi kullanmak.
  //?--------------------------------------------------------------------

  return (
    <div>
      <h1>{baslik}</h1>
      <button onClick={handleTikla}>Tıkla</button>
      <button
        onClick={() => {
          console.log("Sil butonuna tıklandı");
        }}
      >
        Sil
      </button>
      <button onClick={() => handleYaz("Ahmet")}>Yaz</button>
      <button onClick={handleDegistir}>Değiştir</button>
    </div>
  );
}

export default Events;
