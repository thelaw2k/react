import Products from "../../mocks/products";
import { useParams} from "react-router-dom";
import React from "react";

function ItemDetail({product}) {
    return(
        <div>
            <img src={product.image} width="300" />
            <div className="textoybotones">
            <p>{product.name}</p>
            <p>{product.descripcion}</p>
            <p>{product.stock}</p>
            </div>
        </div>
    )
}


export default ItemDetail;