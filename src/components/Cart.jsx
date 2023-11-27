import totalItems from "../services/TotalItems";
import totalPrice from "../services/TotalPrice";
import { Link } from "react-router-dom";

export default function Cart({cart}){
    try {
        return(    
            <section className="card" style={{width:"18rem"}}>
                <ul className="card-body list-group list-group-flush">
                {cart.map((product)=>(
                    <li key={product.ID} className="list-group-item">{product.Name}: x{product.amount}</li>
                ))}
                </ul>
                <p>Total {totalPrice(cart)}kr</p>
                <p>Items in Cart {totalItems(cart)}</p>
                <button className="btn btn-outline-success">
                    <Link to="../checkout" style={{textDecoration: "none", color:"black"}}>Go to checkout</Link>
                </button>
            </section>
        )
    
    } catch (error) {
        return(
            <div>
                <p>Cart is empty</p>
            </div>
        )   
    }
}