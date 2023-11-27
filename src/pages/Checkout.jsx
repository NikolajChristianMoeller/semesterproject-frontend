import ToolBar from "../components/ToolBar";
import Register from "../components/Register";
import CheckoutBanner from "../components/CheckoutBanner";

export default function Checkout({cart, fillCart, reduceCart}){
    try {
        return(
            <>
                <ToolBar cart={cart}/>
                <Register cart={cart} fillCart={fillCart} reduceCart={reduceCart}/>
                <CheckoutBanner cart={cart}/>
            </>
        )
    } catch (error) {
        return(
            <>
                <ToolBar cart={cart}/>
            </>
        )    }



}