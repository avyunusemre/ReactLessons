import React, { useState, useEffect } from "react";
import textDosya from "./yazi.txt";

function UseEffectFetchtxt() {
  const [yazi, setYazi] = useState("");

  useEffect(() => {
    fetch(textDosya)
      .then((cevap) => cevap.text())
      .then((data) => setYazi(data));
  }, []);

  return (
    <div>
      <h2>{yazi}</h2>
    </div>
  );
}

export default UseEffectFetchtxt;
