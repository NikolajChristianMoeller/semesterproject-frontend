import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import restService from "../services/restService";
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";

export default function Product({cart, emptyCart, fillCart}){



    const {id} = useParams();
    const [product, setProduct] = useState([])



    useEffect(()=> loadProduct, [])
  
  

    const loadProduct = async ()=>{
        
        try {
            const data = await restService.getOne(id, "products");
            setProduct(data) 
        } catch (error) {
            console.error("error fetching", error);
        }
    }


try {
        return(
            <div id="productview">
                <ToolBar cart={cart} emptyCart={emptyCart}/>
                <div className="container mx-0 " >
                    <div className="row">
                         <img src="/vite.svg" className="img-fluid col-sm-6  "/>
                        <div className="col-sm-6 text-start">
                           
                            <h3 className="ms-0">{product.Name}</h3>
                            <p className="fs-5" >{product.Description}</p>
                            <p className="fs-4">Pris: {product.Price}</p>
                            <p>Farve: {product.Colors}</p>
                            <p>Antal på lager: {product.Stock}</p>
                            <button  onClick={() => fillCart(product)} type="button" className="btn btn-dark">Tilføj til kurv</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6"></div>
                    </div>


                </div>
                <Footer/>
            </div>
        )
    } catch (error) {
        return(
            <div>
                <p>Oops, we couldn't find what you were looking for. Please try again</p>
                <p>{error}</p>
            </div>
        )
    }

}