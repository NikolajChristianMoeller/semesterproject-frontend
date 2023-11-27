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
            <div className="overflow-x-scroll">
                <ToolBar cart={cart} emptyCart={emptyCart}/>
                <div className="container" style={{maxWidth:"100vw", padding:"0"}}>
                    <div className="row">
                        <img className="img-fluid col w-100" 
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9733d5b1-e159-4ed2-bd0d-eb69e8d94053/ddj5grj-be1e878f-450a-48c6-b847-32005ea7f5be.jpg/v1/fill/w_1280,h_360,q_75,strp/ultra_wide__32_9__wallpapers_by_spheriscope_by_spheriscope_ddj5grj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzYwIiwicGF0aCI6IlwvZlwvOTczM2Q1YjEtZTE1OS00ZWQyLWJkMGQtZWI2OWU4ZDk0MDUzXC9kZGo1Z3JqLWJlMWU4NzhmLTQ1MGEtNDhjNi1iODQ3LTMyMDA1ZWE3ZjViZS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-XRGSQqSfjfCkyys4P1n2Ti_UMU6OUysv_ajQSgLwkc"
                            />
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
                <footer style={{paddingTop:"5rem"}}>
                </footer>
            </div>
        );
    } catch(error){
        return ( 
            <h2>Error</h2>
        )
    }

}