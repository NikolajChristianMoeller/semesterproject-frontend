import ToolBar from "../components/ToolBar";
import Auth from "../components/Auth";


export default function Login({cart, emptyCart}){
  return (
    <div>
      <ToolBar cart={cart} emptyCart={emptyCart}/>
      <Auth/>
    </div>

)}
