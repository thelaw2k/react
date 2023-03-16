function ItemDetail({product}) {
    return(
        <div>
            <img src={product.image} width="300" />
            <div className="textoybotones">
            <p>{product.name}</p>
            </div>
        </div>
    )
}


export default ItemDetail;