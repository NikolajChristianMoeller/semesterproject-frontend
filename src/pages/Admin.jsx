import { useNavigate } from "react-router";
import ToolBar from "../components/ToolBar";
import AdminTable from "../components/AdminTable";
import restService from '../services/restService';
import { useState, useEffect } from "react";
import DeleteModal from "../components/DeleteModal";
import UpdateForm from "../components/UpdateForm";

export default function Admin({cart, emptyCart}){
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productToDelete, setProductToDelete] = useState({ID:0, Name: "No product selected"});
    const [productToUpdate, setProductToUpdate] = useState({ID:0, Name: "No product selected"});


    const logout = ()=> {
        sessionStorage.removeItem("authenticated");
        navigate("/");
    } 


    useEffect(()=> loadProducts, [])
    
    const loadProducts = async ()=>{
        try {
            const products = await restService.getAll("products");
            setProducts(products) 
            console.log(products)
        } catch (error) {
            console.error("error fetching", error);
        }
    }

    const deleteClicked = (product)=>{
        setProductToDelete(product)
    }

    const deleteProduct = async (product)=> {
        try {
            const res = await restService.delete(product.ID, "products")
            loadProducts();
            return res.ok;
        } catch (error) {
            console.error(`Error deleting product(${product.ID}):`, error)
            loadProducts();
        }
    }

    const updateClicked = (product)=>{
        setProductToUpdate(product)
    }

    return (
        <div>
            <ToolBar cart={cart} emptyCart={emptyCart}/>
            <AdminTable products={products} deleteClicked={deleteClicked} updateClicked={updateClicked}/>
            <DeleteModal productToDelete={productToDelete} deleteProduct={deleteProduct}/>
            <UpdateForm productToUpdate={productToUpdate}/>
            <button className="btn btn-danger" onClick={logout}>Log out</button>
        </div>

    )


}