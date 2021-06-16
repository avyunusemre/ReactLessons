import React, { useState } from "react";
import "./Form.css";

function Form1() {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [mesaj, setMesaj] = useState("");

  function adGuncelle(event) {
    setAd(event.target.value);
  }

  function soyadGuncelle(event) {
    setSoyad(event.target.value);
  }

  function mesajGuncelle(event) {
    setMesaj(event.target.value);
  }

  return (
    <div className="alan">
      {ad && (
        <h1>
          Merhaba {ad} {soyad}
        </h1>
      )}

      <form>
        <input
          className="input"
          type="text"
          name="ad"
          placeholder="Adınız :"
          required
          value={ad}
          onChange={adGuncelle}
        />

        <input
          className="input"
          type="text"
          name="soyad"
          placeholder="Soyadınız :"
          required
          value={soyad}
          onChange={soyadGuncelle}
        />

        <textarea
          className="input"
          name="mesaj"
          id="mesaj"
          cols="30"
          rows="10"
          value={mesaj}
          onChange={mesajGuncelle}
        ></textarea>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default Form1;
