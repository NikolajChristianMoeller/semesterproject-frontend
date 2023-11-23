/* eslint-disable react/prop-types */
export default function Register({cart, fillCart, reduceCart}){
    return(
        <section id="product-grid">
        {cart.map((product)=>(
            <section className="product" key={product.ID}>
                <p>{product.Name}</p>
                <p>Qty: {product.amount}</p>
                <p>Price: {product.Price*product.amount}kr</p>
                <div>
                    <button onClick={()=>reduceCart(product)}>-</button>
                    <button onClick={()=>fillCart(product)}>+</button>
                </div>
            </section>
        ))}
    </section>
    )
}