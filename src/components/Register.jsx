/* eslint-disable react/prop-types */
export default function Register({cart, fillCart, reduceCart}){
    try {
            return(
                <section id="product-grid">
                {cart.map((product)=>(
                    <section className="product" key={product.ID}>
                        <p>{product.Name}</p>
                        <p>Qty: {product.amount}</p>
                        <p>Price: {product.Price*product.amount}kr</p>
                        <div className="btn-group" role="group">
                            <button onClick={()=>reduceCart(product)} className="btn btn-dark">-</button>
                            <button onClick={()=>fillCart(product)} className="btn btn-dark">+</button>
                        </div>
                    </section>
                ))}
            </section>
            )
    } catch (error) {
        return(
            <div>
               <p>Der skete en fejl :(</p> 
               <p>{error}</p>
            </div>
        )
    }

}