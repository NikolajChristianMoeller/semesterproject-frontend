import ToolBar from "../components/ToolBar";
import { useLocation } from "react-router-dom";
import Cart from "../components/Cart";

export default function Checkout(){
    try {
        const location = useLocation();
        const { cart }  = location.state;
        return(
            <>
                <ToolBar/>
                <Cart cart={cart}/>
            </>
        )
    } catch (error) {
        return(
            <>
                <ToolBar/>
                <Cart cart={[]}/>
            </>
        )    }



}