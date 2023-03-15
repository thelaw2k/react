import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";


function App() {
  //let greeting = "Hola Mundo";
  const [greeting, setGreeting] = useState(1);

  const handleChange = () => {
    setGreeting(greeting+1);
  };

  return (
    <div>
      <NavBar changeValue = {handleChange}/>
      <ItemListContainer greeting = {greeting} />
    </div>
  );
}

export default App;