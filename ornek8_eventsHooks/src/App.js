import "bootstrap/dist/css/bootstrap.min.css";
import ClassComponent from "./ClassComponent";
import Events from "./Events";
import Hooks from "./Hooks";

function App() {
  return (
    <div className="App">
      <Events />
      <ClassComponent sayi="10" />
      <ClassComponent sayi="100" />
      <Hooks />
    </div>
  );
}

export default App;
