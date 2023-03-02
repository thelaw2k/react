import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import itemListContainer from "./components/itemListContainer";


function App() {

  return (
    <div>
      <NavBar />
      <itemListContainer greeting={"Hola Cliente"} />
    </div>
  );
}

export default App;