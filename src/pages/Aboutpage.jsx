import ToolBar from "../components/ToolBar"
import Footer from "../components/Footer"
import About from "../components/About"

export default function Contactpage({cart, emptyCart}){
    try{
        return(
            <div>
                  <ToolBar cart={cart} emptyCart={emptyCart}/>
                 <About></About>
                  <Footer></Footer>
            </div>
        )
    }
    catch(error){
        console.error("Oh no Error", error)
    }
}