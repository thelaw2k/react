import { useEffect, useState } from "react";
import Products from "../../mocks/products";
import ItemList from "../ItemList";

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsPromise = new Promise((resolve, reject) =>
            setTimeout(() => resolve(Products), 2000)
        );

        productsPromise
        .then((response) => setProducts(response))
        .catch((err) => console.log(err));
    }, []);

    return (
        //<div>{greeting}</div>

        <div>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;