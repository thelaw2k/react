import { useEffect, useState } from "react";
import Products from "../../mocks/products";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer() {
    const [detproducts, setDetProducts] = useState([]);

    useEffect(() => {
        const detProductsPromesa = new Promise((resolve, reject) =>
            setTimeout(() => resolve(Products[0]), 1000)
        );

        detProductsPromesa
        .then((response) => setDetProducts(response))
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <p>Item Detail Container</p>
        </div>
    );
}

export default ItemDetailContainer;