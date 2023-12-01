import { useNavigate } from "react-router";
import ToolBar from "../components/ToolBar";
import AdminTable from "../components/AdminTable";
import restService from '../services/restService';
import { useState, useEffect } from "react";
import DeleteModal from "../components/DeleteModal";
import UpdateForm from "../components/UpdateForm";
import CreateProduct from "../components/CreateProduct";
import CreateOptions from "../components/CreateOptions.jsx";
import FeedbackModal from "../components/FeedbackModal.jsx";

export default function Admin({cart, emptyCart}){
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productToDelete, setProductToDelete] = useState({ID:0, Name: "No product selected"});
    const [productToUpdate, setProductToUpdate] = useState({ID:0, Name: "No product selected"});
    const [colors, setColors] = useState([]);
    const [collections, setCollections] = useState([]);
    const [categories, setCategories] = useState([]);
    const [form, setForm] = useState("create")


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

    const handleDelete = async (object, type)=> {
        try {
            const res = await restService.delete(object.ID, type)
            loadProducts();
            return res.ok;
            
        } catch (error) {
            console.error(`Error deleting product(${object.ID}):`, error)
            loadProducts();
        }
    }

    const updateClicked = (product)=>{
        document.querySelector("#update-product-form").reset();
        setProductToUpdate(product)
    }

    const handleUpdate = async (object, type)=>{
        try {
            const res = await restService.update(object, type);
            if(res){
                switch (type) {
                    case type = "colors":
                        loadColors();                        
                        break;
                    default:
                        break;
                }
//awkward and roundabout way of closing modal because bootstrap didnt want to cooperate
                loadProducts();
            } else{
                console.log(res);
                throw new Error("response not OK");
            }
        } catch (error) {
         console.error("error updating:",error)   
        }

    }

    const handleCreate = async (object, type)=> {
        try {
            const res = await restService.create(object, type);
            if(res){
                switch (type) {
                    case type = "colors":
                        loadColors();                        
                        return res;
                    case type = "collections":
                        loadCollections();
                        return res;
                    case type = "categories":
                        loadCategories();
                        return res;
                    case type = "products":
                        loadProducts();
                        return res;
                    default:
                        break;
                }
            } else{
                return res;
            }
        } catch (error) {
         console.error("error creating:",error)   
        }
    }

    const createOptionClick = (event, form)=> {
        event.preventDefault();
        setForm(form)
    }


    const loadColors = async ()=>{
        try {
            const colors = await restService.getAll("colors");
            setColors(colors) 
        } catch (error) {
            console.error("error fetching colors", error);
        }
    }

    const loadCollections = async ()=>{
      try {
          const collections = await restService.getAll("collections");
          setCollections(collections) 
      } catch (error) {
          console.error("error fetching collections", error);
      }
    }

    const loadCategories = async ()=>{
      try {
          const categories = await restService.getAll("categories");
          setCategories(categories) 
      } catch (error) {
          console.error("error fetching categories", error);
      }
    }



    useEffect(()=> loadColors, [])
    useEffect(()=> loadCollections, [])
    useEffect(()=> loadCategories, [])




    return (
        <div>
            <ToolBar cart={cart} emptyCart={emptyCart}/>
            <AdminTable products={products} deleteClicked={deleteClicked} updateClicked={updateClicked}/>
            <DeleteModal productToDelete={productToDelete} handleDelete={handleDelete}/>
            <UpdateForm productToUpdate={productToUpdate} handleUpdate={handleUpdate} colors={colors} collections={collections} categories={categories}/>
            <CreateProduct handleCreate={handleCreate} createOptionClick={createOptionClick} colors={colors} collections={collections} categories={categories} />
            <CreateOptions form={form} handleCreate={handleCreate}/>
            <button className="btn btn-info ms-2 rounded-pill" 
                        type="button"
                        data-bs-toggle="modal" 
                        data-bs-target="#create-product-modal"
                >
                    Create
                </button>
            <button className="btn btn-danger" onClick={logout}>Log out</button>
        <FeedbackModal state={state}/>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#testmodal">Modal</button>
        </div>

    )


}