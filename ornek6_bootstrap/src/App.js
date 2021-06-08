import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Main from "./Main";
import Maynav from "./Maynav";

function App() {
  return (
    <div className="App">
      <Maynav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
