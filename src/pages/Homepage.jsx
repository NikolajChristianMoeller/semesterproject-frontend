import ToolBar from "../components/ToolBar"
import { Link } from "react-router-dom"

export default function Homepage(){
        return(
        <div>
            <ToolBar/>

            <h1>Welcome to Costco I love you!</h1>
            <h2>
                <Link to="../products">Take me to the products!</Link>
            </h2>
            
        </div>
        )
}