import React, { useState, useEffect } from "react";

//!useEfect Hook'u side effect(yan etki)'leri yonetmek icin
//!kullanılan bir Hook'tur.

//!Class komponentlerideki componentDidMount(), componentDidUnMount(),
//!componentDidUpdate() gibi yasam döngüsü (lifecycle) metodlarının
//!yaptığı işi yapar.

//! - Bu ozellikleri sayesinde genelde uygulama dis dunyadan (veritabani, api)
//!   veri cekerken kullanimi yaygindir.

function useEffect01() {
  const [sayac, setSayac] = useState(0);

  //!- useEffect Hook'u default olarak her render da isletilir.
  //!- Su anki hali componentDidMount() ve bunula beraber
  //!  componentDidUpdate() metodonun birlesimi gibi calisiyor.
  // useEffect(() => {
  //   console.log("ilk render da ve sayfanin her renderinda calisir.");
  // });

  //!- Eger dependenct listesinde bir degisken kullanilir ise
  //!  bu degisken degistiginde useEffect fonksiyonu calisitirilir.
  //!- Bu hali componentDidUpdate() e benzer.

  useEffect(() => {
    console.log("komponent her güncellendiğinde calışır");
  }, [sayac]);

  //!- Eger bir dependency listesi kullanir ise ve bu liste bos
  //!  biraklirsa sadece ilk render da useEffect calisir.
  //!- Bu hali componentDidMount() metoduna benzer.
  useEffect(() => {
    console.log("sadece ilk render'da calisir.");
  }, []);

  //!- Eger bir return metodu yazilir ise bu clenup fonksiyonu
  //!  sadece komponent kaldirildiginda calisir.
  useEffect(() => {
    return () => {
      console.log("cleanup fonksiyonu");
    };
  }, []);

  useEffect(() => {
    console.log(
      "ilk render da calisir,sayacin he guncellemesinde caliir, komponet kaldiringinda clean-up yapar."
    );
    return () => {
      console.log("cleanup fonksiyonu");
    };
  }, [sayac]);

  function arttir() {
    setSayac(sayac + 1);
  }

  return (
    <div className="container text-center mt-5">
      <h1>Sayac: {sayac}</h1>
      <button onClick={arttir} className="btn btn-danger">
        ARTTIR
      </button>
    </div>
  );
}

export default useEffect01;
