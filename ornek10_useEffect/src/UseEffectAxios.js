import React, { useState, useEffect } from "react";
import axios from "axios";

//!- axios harici kaynaklardan verileri alabilmemize olanak
//!  saglayan bir kutuphanedir.
//!- En buyuk avantaji, kullanimin kolay ve  eski tarayicilar
//!  ile de uyumlu olmasidir.

function UseEffectAxios() {
  const [kisiler, setKisiler] = useState([]);

  //?axios alinan verileri otomatik olarak JSON'a donusturulur.
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      // .then((res) => res)
      .then((res) => setKisiler(res.data));
  }, []);

  const yeniKisi = {
    name: "Can",
    emai: "can@gmail.com",
    phone: "535-295-5894",
  };

  //?- axios ile post islemi (API veri gonderme) fetch api'ye oranla
  //?  cok daha kolaydir.
  useEffect(() => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", yeniKisi)
      // .then((res) => res)
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="text-center p-2 mt-5">
      {kisiler.map((kisi) => {
        const { id, name, email, phone } = kisi;
        return (
          <div className="border" key={id}>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <p>{phone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UseEffectAxios;
