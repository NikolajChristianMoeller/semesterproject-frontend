import {  useEffect, useState } from 'react'
import ProductGrid from '../components/ProductGrid';
import ToolBar from '../components/ToolBar';
import restService from '../services/restService';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';


export default function Homepage({fillCart, cart, emptyCart}){






    const [products, setProducts] = useState([]);

    useEffect(()=> loadProducts, [])
    
    const loadProducts = async ()=>{
        try {
            const products = await restService.getAll("products");
            setProducts(products) 
        } catch (error) {
            console.error("error fetching", error);
        }
    }
    

    try {
        return ( 
            <div>
                <ToolBar cart={cart} emptyCart={emptyCart}/>
                <div className="container" id="homepage" style={{maxWidth:"100vw", padding:"0"}}>
                    <div className="row">
                        <Carousel className="col w-100"/>
                    </div>
                    <div className="container" style={{marginTop:"2rem"}}>
                    <div className="row">
                        <h2 className="text-center" style={{marginBottom:"3rem"}}>Katalog</h2>
                    </div>
                        <div className="row">
                        <ProductGrid products={products} fillCart={fillCart} emptyCart={emptyCart}/>
                    </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    } catch(error){
        return ( 
            <h2>Error</h2>
        )
    }

}