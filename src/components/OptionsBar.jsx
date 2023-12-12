import { useEffect, useState } from "react"
import restService from "../services/restService"

export default function OptionsBar({changeSort, changeFilter, handleSearch}){
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

    useEffect(()=> loadColors(), [])
    useEffect(()=> loadCollections(), [])
    useEffect(()=> loadCategories(), [])

    return(
        <div className="container mx-auto my-3 w-100">
            <div className="row mx-auto gx-0">
                <div className="dropdown col">
                <button className="btn btn-lg dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" style={{backgroundColor:"white", borderRadius:"0px"}}>
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
                <div className="dropdown col">
                <button className="btn btn-lg dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" style={{backgroundColor:"white", borderRadius:"0px"}}>
                Farver
                </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={()=>changeFilter("All", "")}>Alle</li>
                        {colors.map((color)=>(
                            <li key={color.Code} className="dropdown-item" onClick={()=>changeFilter("Colors", color.Name)}>{color.Name}</li>
                        ))}
                    </ul>
                </div>
                <div className="dropdown col">
                <button className="btn btn-lg dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" style={{backgroundColor:"white", borderRadius:"0px"}}>
                Kollektioner
                </button>
                    <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={()=>changeFilter("All", "")}>Alle</li>
                        {collections.map((collection)=>(
                            <li key={collection.ID} className="dropdown-item" onClick={()=>changeFilter("Collections",collection.Name)}>{collection.Name}</li>
                        ))}
                    </ul>
                </div>
                <div className="dropdown col">
                <button className="btn btn-lg dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" style={{backgroundColor:"white", borderRadius:"0px"}}>
                Kategorier
                </button>
                    <ul className="dropdown-menu">
                    <li className="dropdown-item" onClick={()=>changeFilter("All", "")}>Alle</li>
                        {categories.map((category)=>(
                            <li key={category.ID} className="dropdown-item" onClick={()=>changeFilter("Categories",category.Name)}>{category.Name}</li>
                        ))}
                    </ul>
                </div>
                <form className="d-flex mt-1" role="search" onSubmit={(event)=>handleSearch(event)}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Søg efter produkt"
                name="search"
              />
              <button className="btn btn-success" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>
              </button>
            </form>

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