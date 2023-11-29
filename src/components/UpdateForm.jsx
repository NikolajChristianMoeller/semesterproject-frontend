/* eslint-disable react/prop-types */
// TODO: add dropdown with only colors that exist in db
// TODO: finish form
// TODO: add dropdown with collection
// TODO: setup so you can add multiple collections and colors when updating
import restService from "../services/restService";
import { useEffect, useState } from "react";

export default function UpdateForm({productToUpdate, updateProduct}){
    const [colors, setColors] = useState([]);
    const [collections, setCollections] = useState([]);
    const [newColors, setNewColors] = useState([]);
    const [newCollections, setNewCollections] = useState([]);

      const handleSubmit = (event)=> {
        event.preventDefault();

          const product = {
          ID: productToUpdate.ID,
          Name: document.querySelector("#update-product-form").productName.value,
          Price: document.querySelector("#update-product-form").productPrice.value,
          Description: document.querySelector("#update-product-form").productDescription.value,
          ProductColor: newColors,
          ProductCollection: newCollections,
          }
          
        updateProduct(product);
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

    const handleChangeColor = (event, color)=>{
      try {
        if(event.target.checked){
          setNewColors([...newColors, color])
        }else{
          newColors.splice([newColors.indexOf(color)], 1);
          setNewColors([...newColors]);
        }
      } catch (error) {
        console.error("error adding color:", error)
      }
      console.log(newColors);
    }

    const handleChangeColllection = (event, collection)=>{
      try {
        if(event.target.checked){
          setNewCollections([...newCollections, collection])
        }else{
          newCollections.splice([newCollections.indexOf(collection)], 1);
          setNewCollections([...newCollections]);
        }
      } catch (error) {
        console.error("error adding collection:", error)
      }
      console.log(newColors);
    }


    useEffect(()=> loadColors, [])
    useEffect(()=> loadCollections, [])

    return(
        <div className="modal" id="update-modal" tabIndex="-1" aria-labelledby="update-modal" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen" >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="update-modal-label">Update {productToUpdate.Name} ({productToUpdate.ID})</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body mx-auto">
            <form id="update-product-form" className="row mx-auto"  onSubmit={(event)=>handleSubmit(event)}>
                <div className="col-md-5">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productName" defaultValue={productToUpdate.Name}/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input type="text" className="form-control" id="productPrice" defaultValue={productToUpdate.Price}/>
                </div>
                <div className="col-10">
                    <label htmlFor="productDescription" className="form-label">Description</label>
                    <textarea type="text" className="form-control" id="productDescription" rows="6" defaultValue={productToUpdate.Description}/>
                </div>
                
                <div className="row g-3">
                <fieldset className="col-2">
                  <legend>
                    Collection
                  </legend>
                      {collections.map((collection)=>(
                        <div className="form-check form-check" key={collection.ID+"checkbox"}>
                        <input className="form-check-input" type="checkbox" id="update-collections" onChange={(event)=>handleChangeColllection(event, collection)}/>
                        <label className="form-check-label" htmlFor="update-collections">
                         {collection.Name}
                        </label>
                        </div>
                        ))}                    
                </fieldset>
                <fieldset className="col-2">
                <legend>
                    Colors
                  </legend>
                      {colors.map((color)=>(
                        <div className="form-check form-check" key={color.ID+"checkbox"}>
                        <input className="form-check-input" type="checkbox" id={"checkbox-"+color.Name} onChange={(event)=>handleChangeColor(event, color)}/>
                        <label className="form-check-label" htmlFor={"checkbox-"+color.Name}>
                         {color.Name}
                        </label>
                        </div>
                        ))}                  
                </fieldset>
                </div>
                <div className="col-10">
                    <button type="submit" className="btn btn-primary">Update product</button>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
}