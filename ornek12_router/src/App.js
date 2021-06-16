import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Kurslar from "./components/Kurslar";
import Kisiler from "./components/Kisiler";
import Iletisim from "./components/Iletisim";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/kurslar">
            <Kurslar />
          </Route>
          <Route path="/kisiler">
            <Kisiler />
          </Route>
          <Route path="/iletisim">
            <Iletisim />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
