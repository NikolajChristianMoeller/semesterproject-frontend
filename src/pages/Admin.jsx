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
        document.querySelector("#update-product-form").reset();
        setProductToUpdate(product)
    }

    const updateProduct = async (product)=>{
        try {
            const res = await restService.update(product, "products");
            if(res){
                document.querySelector("#update-modal").dispatchEvent( new KeyboardEvent("keydown", {
                    altKey: false,
                    code: "Escape",
                    ctrlKey: false,
                    isComposing: false,
                    key: "Escape",
                    location: 0,
                    metaKey: false,
                    repeat: false,
                    shiftKey: false,
                    which: 27,
                    charCode: 0,
                    keyCode: 27,
                  }));
//awkward and roundabout way of closing modal because bootstrap didnt want to cooperate
                loadProducts();
            } 
        } catch (error) {
         console.error("error updating product:",error)   
        }

    }

    return (
        <div>
            <ToolBar cart={cart} emptyCart={emptyCart}/>
            <AdminTable products={products} deleteClicked={deleteClicked} updateClicked={updateClicked}/>
            <DeleteModal productToDelete={productToDelete} deleteProduct={deleteProduct}/>
            <UpdateForm productToUpdate={productToUpdate} updateProduct={updateProduct}/>
            <button className="btn btn-danger" onClick={logout}>Log out</button>
        </div>

    )


}