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
import Feedback from "../components/Feedback.jsx";

//TODO: make the active tab persistent so it doesn't switch to products when you perfom updates in misc table

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

    setTimeout(()=>{
        document.querySelector("#product-tab").click()
    }, 1)
    //set timeout to wait for the elements to be rendered before initializing the tabs
    // 1ms seems to be enough
    
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

    function showFeedback(res, type){
        window.scrollTo({top:0, behavior:"smooth"});

        {/*gives feedback message depending whether res is ok*/}
        if(res){
switch (type) {
    case type = "delete": 
    document.querySelector("#feedback-delete-success").classList.remove("hidden");
            setTimeout(() => {
                   document.querySelector("#feedback-delete-success").classList.add("hidden")
            }, 5000);
        break;

    case type = "update":
        document.querySelector("#feedback-update-success").classList.remove("hidden");
            setTimeout(() => {
                   document.querySelector("#feedback-update-success").classList.add("hidden")
            }, 5000);
        break;
    case type = "create":
        document.querySelector("#feedback-create-success").classList.remove("hidden");
            setTimeout(() => {
                   document.querySelector("#feedback-create-success").classList.add("hidden")
            }, 5000);
        break;
        
    default:
        document.querySelector("#feedback-success").classList.remove("hidden");
            setTimeout(() => {
                   document.querySelector("#feedback-success").classList.add("hidden")
            }, 5000);
        break;
    }
 }

        else{
            switch (type) {
                case type = "delete":
                    document.querySelector("#feedback-delete-error").classList.remove("hidden");
            setTimeout(() => {
                   document.querySelector("#feedback-delete-error").classList.add("hidden")
            }, 5000);
            break;

            case type = "create":
                document.querySelector("#feedback-create-error").classList.remove("hidden");
            setTimeout(() => {
                   document.querySelector("#feedback-create-error").classList.add("hidden")
            }, 5000);
            break;

            case type = "update":
            document.querySelector("#feedback-update-error").classList.remove("hidden");
            setTimeout(() => {
                   document.querySelector("#feedback-update-error").classList.add("hidden")
            }, 5000);
            break;

            default:
            document.querySelector("#feedback-error").classList.remove("hidden");
            setTimeout(() => {
                   document.querySelector("#feedback-error").classList.add("hidden")
            }, 5000);
            break;
            }  
        }


       
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
                        showFeedback(res, "delete");
                        break;

                    case type = "collections":
                        loadCollections();
                        showFeedback(res, "delete");
                        break;
                    case type = "categories":
                        loadCategories();
                        showFeedback(res, "delete");
                        break;
                    case type = "products":
                        loadProducts();
                        showFeedback(res, "delete");
                        break;
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
                            showFeedback(res,"update");
                        break;
                        case type = "collections":
                            loadCollections();
                            showFeedback(res,"update");
                        break;
                        case type = "categories":
                            loadCategories();
                          showFeedback(res,"update");
                        break;
                        case type = "products":
                            loadProducts();
                            showFeedback(res,"update");
                        break;
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
                        showFeedback(res,"create");
                        break;
                        case type = "collections":
                        loadCollections();          
                        showFeedback(res,"create");
                        break;
                        case type = "categories":
                        loadCategories();         
                        showFeedback(res,"create");
                        break;
                        case type = "products":
                        loadProducts();         
                        showFeedback(res,"create");
                        break;
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

    const adjustStock = async (id, stock)=>{
        const object = {ID: id, Stock: stock}
        try {
            const res = await restService.updateStock(object);
            if(res){
                loadProducts();
            }
        } catch (error) {
            console.error("error adjusting stock", error)
        }
    }


    useEffect(()=> loadProducts, [])
    useEffect(()=> loadColors, [])
    useEffect(()=> loadCollections, [])
    useEffect(()=> loadCategories, [])




    return (
        <div>
            <ToolBar cart={cart} emptyCart={emptyCart}/>
            <Feedback/>
            <div id="tabs" className="container row mt-4 mx-auto">
                <ul className="nav-tabs nav">
                    <li className="nav-item">
                    <p id="product-tab" data-tab-show="product-list" onClick={(event)=>tabs(event)} className="nav-link">Products</p>
                    </li>
                    <li className="nav-item">
                    <p id="color-tab" data-tab-show="colors-list" onClick={(event)=>tabs(event)} className="nav-link">Colors</p>
                    </li>
                    <li className="nav-item">
                    <p id="collection-tab" data-tab-show="collections-list" onClick={(event)=>tabs(event)} className="nav-link">Collections</p>
                    </li>
                    <li className="nav-item">
                    <p id="category-tab" data-tab-show="categories-list" onClick={(event)=>tabs(event)} className="nav-link">Categories</p>
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
                    <ProductTableAdmin products={products} deleteClicked={deleteClicked} updateClicked={updateClicked} adjustStock={adjustStock}/>
                    <MiscTable objects={colors} table={"colors"} deleteClicked={deleteClicked} handleUpdate={handleUpdate}/>
                    <MiscTable objects={categories} table={"categories"} deleteClicked={deleteClicked} handleUpdate={handleUpdate}/>
                    <MiscTable objects={collections} table={"collections"} deleteClicked={deleteClicked} handleUpdate={handleUpdate}/>
                </div>
            </div>
            <DeleteModal deleteTarget={deleteTarget} handleDelete={handleDelete}/>
            <UpdateForm updateTarget={updateTarget} handleUpdate={handleUpdate} createOptionClick={createOptionClick} colors={colors} collections={collections} categories={categories}/>
            <CreateProduct handleCreate={handleCreate} createOptionClick={createOptionClick} colors={colors} collections={collections} categories={categories} />
            <CreateOptions form={form} handleCreate={handleCreate}/>
      
        </div>
        

    )


}