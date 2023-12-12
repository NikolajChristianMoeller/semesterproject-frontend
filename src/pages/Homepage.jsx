import {  useEffect, useState } from 'react'
import ProductGrid from '../components/ProductGrid';
import ToolBar from '../components/ToolBar';
import restService from '../services/restService';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import OptionsBar from '../components/OptionsBar';
import Paginator from '../components/Paginator';

export default function Homepage({fillCart, cart, emptyCart}){
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState({sortBy:"ID", sortDir:"DESC"})
    const [filter, setFilter] = useState({filterBy:"All", filterValue:""})
    const [count, setCount] = useState()
    const [page, setPage] = useState({limit: 0})

    
    const loadProducts = async ()=>{
        try {
            const res = await restService.getAll("products",page.limit, sort, filter);
            setCount(res.count)
            setProducts(res.rows)
        } catch (error) {
            console.error("error fetching", error);
        }
    }

    useEffect(()=> loadProducts, [])



    const changeSort = (value, dir)=>{
        sort.sortBy = value
        sort.sortDir = dir
        setSort(sort);
        loadProducts();
    }
    
    const changeFilter = (filterTable, filterValue)=>{
        filter.filterBy = filterTable;
        filter.filterValue = filterValue;
        setFilter(filter);
        loadProducts();
    }

    const handleSearch = (event)=>{
        event.preventDefault();
        filter.filterBy = "Search";
        filter.filterValue = event.target.search.value
        setFilter(filter)
        event.target.reset();
        loadProducts();
    }


    try {
        return ( 
            <div>
                <ToolBar cart={cart} emptyCart={emptyCart} handleSearch={handleSearch}/>
                <div className="container" id="homepage" style={{maxWidth:"100vw", padding:"0"}}>
                    <div className="row">
                        <Carousel className="col w-100"/>
                    </div>
                    <div className="row">
                        <h2 className="text-center my-5" style={{marginBottom:"3rem"}}>Katalog</h2>
                    </div>
                </div>
                    <OptionsBar changeSort={changeSort} changeFilter={changeFilter} handleSearch={handleSearch}/>
                <div className='container'>
                    <ProductGrid products={products} fillCart={fillCart} emptyCart={emptyCart}/>
                    <Paginator count={count} loadProducts={loadProducts} setPage={setPage} page={page}/>
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