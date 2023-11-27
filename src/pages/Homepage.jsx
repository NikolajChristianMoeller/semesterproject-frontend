import {  useEffect, useState } from 'react'
import ProductGrid from '../components/ProductGrid';
import Cart from '../components/Cart';
import ToolBar from '../components/ToolBar';
import restService from '../services/restService';

export default function Homepage({fillCart, cart}){
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
                <ToolBar/>
                <h3>Katalog</h3>
                <ProductGrid products={products} fillCart={fillCart} />
                <Cart cart={cart}/>
            </div>
        );
    } catch(error){
        return ( 
            <h2>Error</h2>
        )
    }

}