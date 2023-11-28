import { useNavigate } from "react-router";
import ToolBar from "../components/ToolBar";

export default function Admin({cart, emptyCart}){
    const navigate = useNavigate();
    const logout = ()=> {
        sessionStorage.removeItem("authenticated");
        navigate("/");
    } 


    return (
        <div>
            <ToolBar cart={cart} emptyCart={emptyCart}/>
            <h1>Admin success!</h1>
            <button className="btn btn-danger" onClick={logout}>Log out</button>
        </div>

    )


}