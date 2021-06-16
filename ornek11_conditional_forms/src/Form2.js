import React, { useState } from "react";
import "./Form.css";

function Form2() {
  const [form, setForm] = useState({ ad: "", soyad: "", mesaj: "" });
  const { ad, soyad, mesaj } = form;

  function guncelle(event) {
    const { name, value } = event.target;
    setForm(() => {
      return {
        ...form,
        [name]: value,
      };
    });
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
          onChange={guncelle}
        />

        <input
          className="input"
          type="text"
          name="soyad"
          placeholder="Soyadınız :"
          required
          value={soyad}
          onChange={guncelle}
        />

        <textarea
          className="input"
          name="mesaj"
          id="mesaj"
          cols="30"
          rows="10"
          value={mesaj}
          onChange={guncelle}
        ></textarea>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default Form2;
