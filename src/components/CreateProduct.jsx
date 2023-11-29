// TODO: add dropdown with only colors that exist in db
// TODO: finish form
// TODO: add dropdown with collection
// TODO: setup so you can add multiple collections and colors when updating
import restService from "../services/restService";
import { useEffect, useState } from "react";

export default function CreateProduct(){
    const [colors, setColors] = useState([]);
    const [collections, setCollections] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedCollections, setSelectedCollections] = useState([]);

    
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

    const handleSubmitColor = (event)=>{
      event.preventDefault();
      const selectedColors = [];
      const options = document.querySelector("#inputColor").options
      console.log(options)
      for (const option of options) {
        if(option.selected){
          selectedColors.push(option.value);
        }
      }
      console.log(selectedColors);
    }

    const handleSubmitColllection = (event)=>{
      event.preventDefault();
      console.log()
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
            <div className="modal-body">
            <form className="row g-3">
                <div className="col-md-5">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productName"/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input type="text" className="form-control" id="productPrice"/>
                </div>
                <div className="col-10">
                    <label htmlFor="productDescription" className="form-label">Description</label>
                    <textarea type="text" className="form-control" id="productDescription" rows="6" />
                </div>
                <div className="col-md-5">
                    <label htmlFor="inputCollection" className="form-label">Collection(s)</label>
                    <select id="inputCollection" className="form-select" multiple>
                      {collections.map((collection)=>(
                        <option key={collection.ID} value={collection}>
                          {collection.Name} 
                          </option>
                        ))}                    
                      </select>
                    <button className="btn btn-primary mt-2"
                    onClick={(event)=>handleSubmitColllection(event)}>
                      Add Collection(s)
                      </button>
                </div>
                <div className="col-md-5">
                    <label htmlFor="inputColor" className="form-label" >Color(s)</label>
                    <select id="inputColor" className="form-select" multiple>
                    {colors.map((color)=>(
                      <option key={color.ID} value={color}>
                        {color.Name} 
                        </option>
                      ))}
                    </select>
                    <button className="btn btn-primary mt-2"
                    onClick={(event)=>handleSubmitColor(event)}
                   >Add Color(s)</button>
                </div>
                <div className="col-md-5">
                    <p className="ms-5 text-decoration-underline">Collection(s):</p>
                    <ul>
                      {selectedCollections.map((collection)=>(
                        <li key={"selected" + collection.ID}>
                          {collection.Name}
                        </li>
                      ))}
                    </ul>
                </div>
                <div className="col-md-5">
                    <p className="ms-5 text-decoration-underline">Color(s)</p>
                    <ul>
                    {selectedColors.map((color)=>(
                        <li key={"selected" + color.ID}>
                          {color.Name}
                          <div
                              className="color-dot"
                              style={{ backgroundColor: color.Code }}
                            />                        
                      </li>
                      ))}

                    </ul>
                </div>  
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Update product</button>
                </div>
                </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Update</button>
            </div>
          </div>
        </div>
      </div>

    )

}