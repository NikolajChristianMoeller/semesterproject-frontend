import {  useEffect, useState } from 'react'
import ProductGrid from '../components/ProductGrid';
import ToolBar from '../components/ToolBar';
import restService from '../services/restService';

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
                <h3>Katalog</h3>
                <ProductGrid products={products} fillCart={fillCart} emptyCart={emptyCart}/>
            </div>
        );
    } catch(error){
        return ( 
            <h2>Error</h2>
        )
    }

}