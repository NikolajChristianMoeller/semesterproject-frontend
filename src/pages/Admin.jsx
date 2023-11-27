import { useNavigate } from "react-router";
import ToolBar from "../components/ToolBar";

export default function Admin(){
    const navigate = useNavigate();
    const logout = ()=> {
        sessionStorage.removeItem("authenticated");
        navigate("/");
    } 


    return (
        <div>
            <ToolBar/>
            <h1>Admin success!</h1>
            <button className="btn btn-danger" onClick={logout}>Log out</button>
        </div>

    )


}