import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import restService from "../services/restService";
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

export default function Product({cart, emptyCart, fillCart}){



    const {id} = useParams();
    const [product, setProduct] = useState([])



    
    
    
    const loadProduct = useCallback(async ()=>{
        
        try {
            const data = await restService.getOne(id, "products");
            setProduct(data) 
        } catch (error) {
            console.error("error fetching", error);
        }
    },[id])
    
    async function addReview(review){
        try {
            const response = await restService.create(review,"reviews");
            if(response){
                loadProduct();
            } else{
                throw new Error("Error adding review")
            }
            
        } catch (error) {
            console.error("error adding review", error)
        }
    }
    
    useEffect(()=> {loadProduct()}, [loadProduct])

    try {
        return(
            <div id="productview">
                <ToolBar cart={cart} emptyCart={emptyCart}/>
                <div className="container mx-0 " >
                    <div className="row">
                         <img src={product.Images} className="img-fluid col-sm-6  "/>
                        <div className="col-sm-6 text-start">
                           
                            <h3 className="ms-0">{product.Name}</h3>
                            <h4>Beskrivelse</h4>
                            <p className="fs-5" >{product.Description}</p>
                            <p className="fs-4">Pris: {product.Price}</p>
                            <div className="row">
                                {product.Colors.map((color) => (
                                    <div
                                    key={product.ID + color.Code}
                                    className="color-dot"
                                    style={{ backgroundColor: color.Code }}
                                    />
                                    ))}
                            </div>
                            <p>Antal på lager: {product.Stock}</p>
                            <button  onClick={() => fillCart(product)} type="button" className="btn btn-dark">Tilføj til kurv</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6"></div>
                    </div>

               <Reviews product={product} addReview={addReview}/>
                </div>
                <Footer/>
            </div>
        )
    } catch (error) {
        return(
            <div>
                <p>Oops, we couldn't find what you were looking for. Please try again.</p>
            </div>
        )
    }

}