import ToolBar from "../components/ToolBar"
import Footer from "../components/Footer"

export default function Contactpage({cart, emptyCart}){
    try{
        return(
            <div>
                  <ToolBar cart={cart} emptyCart={emptyCart}/>
                 
            <div className="text-center" >
                <h2>Kontakt</h2>
                <p>Navn: Mikrohome A/S </p>
                <p>Tlf: +4550458778 (hverdage 8-10.30)</p>
                <p>E-mail: kundeservice@mikrohome.dk</p>
                <p>Adresse: Rebekkavej 3, kld - 2900 Hellerup - Denmark</p>
            </div>
        
                  <Footer></Footer>
            </div>
        )
    }
    catch(error){
        console.error("Oh no Error", error)
    }
}