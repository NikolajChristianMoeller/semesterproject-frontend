import { useNavigate } from "react-router";
import ToolBar from "../components/ToolBar";
import ProductTableAdmin from "../components/ProductTableAdmin";
import restService from '../services/restService';
import { useState, useEffect } from "react";
import DeleteModal from "../components/DeleteModal";
import UpdateForm from "../components/UpdateForm";
import CreateProduct from "../components/CreateProduct";
import CreateOptions from "../components/CreateOptions";
import tabs from "../services/tabs";
import MiscTable from "../components/MiscTable";

export default function Admin({cart, emptyCart}){
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [deleteTarget, setDeleteTarget] = useState({ID:0, Name: "No product selected"});
    const [updateTarget, setUpdateTarget] = useState({ID:0, Name: "No product selected"});
    const [targetType, setTargetType] = useState();
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

    const deleteClicked = (item, type)=>{
        setDeleteTarget(item)
        setTargetType(type);
    }

    const handleDelete = async (object)=> {
        let type = targetType;
        try {
            const res = await restService.delete(object.ID, type)
            loadProducts();
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
            }
        } catch (error) {
            console.error(`Error deleting product(${object.ID}):`, error)
            loadProducts();
        }
    }

    const updateClicked = (item, type)=>{
        document.querySelector("#update-product-form").reset();
        setUpdateTarget(item)
        setTargetType(type);
    }

    const handleUpdate = async (object, type)=>{
        try {
            const res = await restService.update(object, type);
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
            <div id="tabs" className="container row mt-4 mx-auto">
                <ul className="nav-tabs nav">
                    <li className="nav-item">
                    <p id="product-tab" data-tab-show="product-list" onClick={(event)=>tabs(event)} className="nav-link active">Products</p>
                    </li>
                    <li className="nav-item">
                    <p data-tab-show="colors-list" onClick={(event)=>tabs(event)} className="nav-link">Colors</p>
                    </li>
                    <li className="nav-item">
                    <p data-tab-show="collections-list" onClick={(event)=>tabs(event)} className="nav-link">Collections</p>
                    </li>
                    <li className="nav-item">
                    <p data-tab-show="categories-list" onClick={(event)=>tabs(event)} className="nav-link">Categories</p>
                    </li>
                    <button className="nav-item btn btn-info ms-2" 
                        type="button"
                        data-bs-toggle="modal" 
                        data-bs-target="#create-product-modal"
                >
                    Add product
                </button>
                    <button className="nav-item btn btn-danger" onClick={logout}>Log out</button>
                </ul>
                <div className="row">
                    <ProductTableAdmin products={products} deleteClicked={deleteClicked} updateClicked={updateClicked}/>
                    <MiscTable objects={colors} table={"colors"} deleteClicked={deleteClicked} updateClicked={updateClicked}/>
                    <MiscTable objects={categories} table={"categories"} deleteClicked={deleteClicked} updateClicked={updateClicked}/>
                    <MiscTable objects={collections} table={"collections"} deleteClicked={deleteClicked} updateClicked={updateClicked}/>
                </div>
            </div>
            <DeleteModal deleteTarget={deleteTarget} handleDelete={handleDelete}/>
            <UpdateForm updateTarget={updateTarget} handleUpdate={handleUpdate} colors={colors} collections={collections} categories={categories}/>
            <CreateProduct handleCreate={handleCreate} createOptionClick={createOptionClick} colors={colors} collections={collections} categories={categories} />
            <CreateOptions form={form} handleCreate={handleCreate}/>
        </div>
        

    )


}