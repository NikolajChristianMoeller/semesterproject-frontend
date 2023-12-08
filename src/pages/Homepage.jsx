import {  useEffect, useState } from 'react'
import ProductGrid from '../components/ProductGrid';
import ToolBar from '../components/ToolBar';
import restService from '../services/restService';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import OptionsBar from '../components/OptionsBar';

export default function Homepage({fillCart, cart, emptyCart}){
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0)
    const [sort, setSort] = useState({sortBy:"ID", sortDir:"DESC"})
    const [filter, setFilter] = useState()

    useEffect(()=> loadProducts, [])
    
    const loadProducts = async ()=>{
        try {
            const res = await restService.getAll("products",page, sort, filter);
            setProducts(res.rows)
            console.log(res.count)
        } catch (error) {
            console.error("error fetching", error);
        }
    }

    const changeSort = (value, dir)=>{
        sort.sortBy = value
        sort.sortDir = dir
        setSort(sort);
        loadProducts();
    }
    
    const changeFilter = ()=>{

    }

    try {
        return ( 
            <div>
                <ToolBar cart={cart} emptyCart={emptyCart}/>
                <div className="container" id="homepage" style={{maxWidth:"100vw", padding:"0"}}>
                    <div className="row">
                        <Carousel className="col w-100"/>
                    </div>
                    <div className="row">
                        <h2 className="text-center my-5" style={{marginBottom:"3rem"}}>Katalog</h2>
                    </div>
                </div>
                    <OptionsBar changeSort={changeSort} setFilter={setFilter}/>
                <div className='container'>
                    <ProductGrid products={products} fillCart={fillCart} emptyCart={emptyCart}/>
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