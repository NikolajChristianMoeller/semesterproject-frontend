/* eslint-disable react/prop-types */
export default function ProductGrid({products, fillCart}){ 
    try {
        return (
        <div className="store">

            <section id="product-grid">
                {products.map((product)=>(
                    <div className="product" key={product.ID}>
                        <p style={{fontWeight:"900"}}>{product.Name}</p>
                        <p>{product.Price}kr</p>
                        <p>{product.Description}</p>
                        <p>{product.Stock}</p>
                        <div className="colors">
                                {product.ProductColor.map((color)=>(
                                    <div className="color-dot" key={product.ID + color.ID} style={{backgroundColor:(color.Code)}}/>                            
                                ))}    
                            </div>
                        <button onClick={()=> fillCart(product)}>
                        Tilføj til kurv 🛒
                        </button>
                    </div>
                ))}
            </section>
        </div>
        )
    
    } catch (error) {
        return(
            <>
                <h3>Error getting products :( </h3>
                <p>{error.message}</p>
            </>

        )
    }
}

