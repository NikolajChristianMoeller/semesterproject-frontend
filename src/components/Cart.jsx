import totalItems from "../services/TotalItems";
import totalPrice from "../services/TotalPrice";
import { Link } from "react-router-dom";

export default function Cart({cart}){
    try {
        return(    
            <section className="cart">
                <p>Total {totalPrice(cart)}kr</p>
                <p>Items in Cart {totalItems(cart)}</p>
                <button>
                     <Link to="../" style={{textDecoration: "none", color:"black"}}>Continue shopping</Link>
                </button>
                <button>
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