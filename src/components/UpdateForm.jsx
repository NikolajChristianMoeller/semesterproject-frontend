/* eslint-disable react/prop-types */

export default function UpdateForm({
  updateTarget,
  handleUpdate,
  colors,
  collections,
  categories,
  createOptionClick
}) {

  const newColors = [];
  const newCollections = [];
  const newCategories = [];

  const handleChangeColor = (event, color) => {
    try {
      if (event.target.checked) {
        newColors.push(color);
      } else {
        newColors.splice([newColors.indexOf(color)], 1);
      }
    } catch (error) {
      console.error("error adding color:", error);
    }
  };

  const handleChangeCategory = (event, category) => {
    try {
      if (event.target.checked) {
        newCategories.push(category)
      } else {
        newCategories.splice([newCategories.indexOf(category)], 1);
      }
    } catch (error) {
      console.error("error adding category:", error);
    }
  };

  const handleChangeCollection = (event, collection) => {
    try {
      if (event.target.checked) {
        newCollections.push(collection);
      } else {
        newCollections.splice([newCollections.indexOf(collection)], 1);
      }
    } catch (error) {
      console.error("error adding collection:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      ID: updateTarget.ID,
      Name: document.querySelector("#update-product-form").productName.value,
      Price: document.querySelector("#update-product-form").productPrice.value,
      Description: document.querySelector("#update-product-form")
        .productDescription.value,
      Colors: newColors,
      Collections: newCollections,
      Categories: newCategories,
    };

    const res = await handleUpdate(product, "products");
    if(res){
      document.querySelector("#update-close").click();
    }

  };

  return (
    <div
      className="modal"
      id="update-modal"
      tabIndex="-1"
      aria-labelledby="update-modal"
      aria-hidden="true"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="update-modal-label">
              Update {updateTarget.Name} ({updateTarget.ID})
            </h1>
            <button
              id="update-close"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body mx-auto">
            <form
              id="update-product-form"
              className="row mx-auto"
              onSubmit={(event) => handleSubmit(event)}
            >
              <div className="col-md-5">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  defaultValue={updateTarget.Name}
                />
              </div>
              <div className="col-md-5">
                <label htmlFor="productPrice" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productPrice"
                  defaultValue={updateTarget.Price}
                />
              </div>
              <div className="col-10">
                <label htmlFor="productDescription" className="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="productDescription"
                  rows="6"
                  defaultValue={updateTarget.Description}
                />
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
                        <div className="form-check form-check " key={color.ID+"checkbox"}>
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
                <button type="submit" className="btn btn-primary">
                  Update product
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
