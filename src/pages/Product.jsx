import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import restService from "../services/restService";

export default function Product(){
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
            <div>
                <p> hello </p>
                <p> {product.Name}</p>
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