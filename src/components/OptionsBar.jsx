import { useEffect, useState } from "react"
import restService from "../services/restService"

export default function OptionsBar({changeSort}){
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [collections, setCollections] = useState([]);



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

    return(
        <div className="container mx-auto my-3">
            <div className="row align-items-center">
                <div className="dropdown col">
                <button className="btn btn-lg dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" style={{backgroundColor:"white"}}>
                Sorter efter
                </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={()=>changeSort("Name", "ASC")}>Navn (A-Z)</li>
                        <li className="dropdown-item" onClick={()=>changeSort("Name", "DESC")}>Navn (Z-A)</li>
                        <li className="dropdown-item" onClick={()=>changeSort("Price", "ASC")}>Pris (Lavest først)</li>
                        <li className="dropdown-item" onClick={()=>changeSort("Price", "DESC")}>Pris (Højest først)</li>
                        <li className="dropdown-item" onClick={()=>changeSort("ID", "ASC")}>Nyeste først</li>
                        <li className="dropdown-item" onClick={()=>changeSort("ID", "DESC")}>Ældste først</li>

                    </ul>
                </div>
                <select className="form-select w-25 col mx-2" defaultValue={"undefined"}>
                <option value={"undefined"}>Alle Kategorier</option>
                {categories.map((category)=>(
                    <option key={category.ID} value={category.Name}>{category.Name}</option>
                ))}
                </select>
                <select className="form-select w-25 col mx-2" defaultValue={"undefined"}>
                <option value={"undefined"}>Alle Farver</option>
                {colors.map((color)=>(
                    <option key={color.ID} value={color.Name}>{color.Name}</option>
                ))}
                </select>
                <select className="form-select w-25 col mx-2" defaultValue={"undefined"}>
                <option value={"undefined"}>Alle Kollektioner</option>
                {collections.map((collection)=>(
                    <option key={collection.ID} value={collection.Name}>{collection.Name}</option>
                ))}
                </select>

            </div>
        </div>
    )

}


{/* <select className="form-select w-25 col mx-2" defaultValue={"undefined"} onChange={(event)=>changeSort(event.target.value)}>
<option value={"undefined"} disabled>Sorter efter</option>
<option value="Name">Navn</option>
<option value="Price">Pris</option>
<option value="ID">Nyeste/Ældste</option>
</select> */}