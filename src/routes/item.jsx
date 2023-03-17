import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Products from "../mocks/products";
import { useParams } from "react-router-dom";

function ItemRoot() {
  const params = useParams();

  const product = Products.find((productMock) => productMock.id == params.id)

  return (
    <div>
      <NavBar/>
      <ItemDetailContainer />
    </div>
  );
}

export default ItemRoot;