import {Link} from "react-router-dom";

function Item({product}) {
    return(
        <div>
            <img src={product.image} width="300" />
            <div className="textoybotones">
            <p>{product.name}</p>
            <p>{product.category}</p>
            <Link to={'/item/${product.id}'}>Ver mas</Link>
            </div>
        </div>
    )
}


export default Item;