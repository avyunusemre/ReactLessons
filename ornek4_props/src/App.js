import Mesaj from "./Mesaj";
import Kisi from "./Kisi";

// ! props : Parent modulden child module veri aktarimini saglayan ozleliktir.
// * Veri akisi tek yonludur. Parenttan child'a dogru bir akis vardir.

function App() {
  return (
    <div className="App">
      <Kisi
        ad="Canan Dikbayır"
        resim="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        telefon="09123812341"
      />

      <Kisi
        ad="Tarkan Kıloğlu"
        resim="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        telefon="09129003012"
      />

      <Kisi
        ad="Fisun Felfecir"
        resim="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        telefon="09129003017"
      />
    </div>
  );
}

export default App;
