/* eslint-disable react/prop-types */
import { useState } from "react";

export default function CreateProduct({handleCreate, createOptionClick, collections, colors, categories}){
  const [newColors, setNewColors] = useState([]);
  const [newCollections, setNewCollections] = useState([]);
  const [newCategories, setNewCategories] = useState([]);

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
  }

  const handleChangeCategory = (event, category)=>{
    try {
      if(event.target.checked){
        setNewCategories([...newCategories, category])
      }else{
        newCategories.splice([newCategories.indexOf(category)], 1);
        setNewCategories([...newCategories]);
      }
    } catch (error) {
      console.error("error adding category:", error)
    }
  }

  const handleChangeCollection = (event, collection)=>{
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
  }

      const handleSubmit = async (event)=> {
          event.preventDefault()
          const product = {
          Name: event.target.productName.value,
          Price: event.target.productPrice.value,
          Description: event.target.productDescription.value,
          Stock: 0,
          Colors: newColors,
          Collections: newCollections,
          Categories: newCategories
          }
          
        const res = await handleCreate(product, "products");
        if(res){
          document.querySelector("#close-create").click();
        }
      }

    return(
        <div className="modal" id="create-product-modal" tabIndex="-1" data-bs-keyboard="false">
        <div className="modal-dialog modal-fullscreen" >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="create-modal-label">Create new product</h1>
              <button id="close-create" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body container">
            <form id="create-product-form" className="row"  onSubmit={(event)=>handleSubmit(event)}>
              <div className="row">
                <div className="col">
                      <label htmlFor="productName" className="form-label">Product Name</label>
                      <input type="text" className="form-control" id="productName" />
                  </div>
                  <div className="col">
                      <label htmlFor="productPrice" className="form-label">Price</label>
                      <input type="text" className="form-control" id="productPrice" />
                  </div>
                </div>
                <div className="row">
                    <label htmlFor="productDescription" className="form-label">Description</label>
                    <textarea type="text" className="form-control" id="productDescription" rows="6" />

              </div>
                <div className="row mx-auto">
                <fieldset className="col">
                  <legend>
                    Collection
                  </legend>
                      {collections.map((collection)=>(
                        <div className="form-check form-check" key={collection.ID+"checkbox"}>
                        <input className="form-check-input" type="checkbox" id="update-collections" onChange={(event)=>handleChangeCollection(event, collection.ID)}/>
                        <label className="form-check-label" htmlFor="update-collections">
                         {collection.Name}
                        </label>
                        </div>
                        ))}                    
                </fieldset>
                <fieldset className="col">
                <legend>
                    Colors
                  </legend>
                      {colors.map((color)=>(
                        <div className="form-check form-check " key={color.Code+"checkbox"}>
                        <label className="form-check-label d-flex flex-nowrap" htmlFor={"checkbox-"+color.Name}>
                        <input className="form-check-input" type="checkbox" id={"checkbox-"+color.Name} onChange={(event)=>handleChangeColor(event, color.Code)}/>
                        <div
                      className="color-dot mt-0"
                      style={{ backgroundColor: color.Code}}
                    />
                         {color.Name}
                        </label>
                        </div>
                        ))}                  
                </fieldset>
                <fieldset className="col">
                <legend>
                    Categories
                  </legend>
                      {categories.map((category)=>(
                        <div className="form-check form-check" key={category.ID+"checkbox"}>
                        <input className="form-check-input" type="checkbox" id={"checkbox-"+category.Name} onChange={(event)=>handleChangeCategory(event, category.ID)}/>
                        <label className="form-check-label" htmlFor={"checkbox-"+category.Name}>
                         {category.Name}
                        </label>
                        </div>
                        ))}                  
                </fieldset>
                </div>
                <div className="row">
                  <div className="alert alert-info w-50 mt-5 mx-auto">
                    <p>Not seeing what you're looking for? Click below to add more colors, collections and categories! </p>
                    <button className="btn btn-primary ms-2" data-bs-target="#create-options-modal" data-bs-toggle="modal" onClick={(event)=>{createOptionClick(event, "create")}}>Add more!</button> 
                    </div>
                  </div>
                <div className="col-10">
                    <button type="submit" className="btn btn-success">Create product</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
}