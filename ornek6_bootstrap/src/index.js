// React'ın temel kutuphaneleri
import React from "react";
import ReactDOM from "react-dom";

// App modulunun eklenmesi
import App from "./App";

// Web sayfasina basilacak olan herseyi olusturan veya guncelleyen metot.

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App modulunun cagrilmasi */}
  </React.StrictMode>,
  document.getElementById("root")
);
