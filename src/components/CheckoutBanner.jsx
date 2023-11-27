import totalItems from "../services/TotalItems"
import totalPrice from "../services/TotalPrice"

export default function CheckoutBanner({cart}){
    try {
        return(    
            <section className="cart">
                <p>Total {totalPrice(cart)}kr</p>
                <p>Items in Cart {totalItems(cart)}</p>
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