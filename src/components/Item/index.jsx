function Item({product}) {
    return(
        <div>
            <img src={product.image} width="300" />
            <div className="textoybotones">
            <p>{product.name}</p>
            <button>Ver mas</button>
            </div>
        </div>
    )
}


export default Item;