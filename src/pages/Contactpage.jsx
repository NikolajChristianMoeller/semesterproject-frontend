import ToolBar from "../components/ToolBar"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
export default function Contactpage({cart, emptyCart}){
    try{
        return(
            <div>
                  <ToolBar cart={cart} emptyCart={emptyCart}/>
                  <Contact></Contact>
                  <Footer></Footer>
            </div>
        )
    }
    catch(error){
        console.error("Oh no Error", error)
    }
}