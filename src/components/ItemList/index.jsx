import Item from "../Item";
import './index.css'

function ItemList({ products }){
    return (
        <div className="flex-container">
            {products.map((product, index) => (
                <Item product={product} key={product.id} />
            ))}
        </div>
    );
}

export default ItemList;