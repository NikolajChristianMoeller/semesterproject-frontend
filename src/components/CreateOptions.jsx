export default function CreateOptions({form, handleCreate}){

    const handleCategory = async (event)=> {
        event.preventDefault();
        const category = {
            Name: event.target.categoryName.value,
        }
        const res = await handleCreate(category, "categories");
        if(res){
            document.querySelector("#alert-success").classList.remove("hidden");
            setTimeout(()=>{
                document.querySelector("#alert-success").classList.add("hidden")
            }, 5000)        
        }else{
            document.querySelector("#alert-error").classList.remove("hidden");
            setTimeout(()=>{
                document.querySelector("#alert-error").classList.add("hidden")
            }, 5000)

        }
    }

    const handleColor = async (event)=>{
        event.preventDefault();
        const color = {
            Name: event.target.colorName.value,
            Code: event.target.colorCode.value
        }
        const res = await handleCreate(color, "colors");
        if(res){
            document.querySelector("#alert-success").classList.remove("hidden");
            setTimeout(()=>{
                document.querySelector("#alert-success").classList.add("hidden")
            }, 5000)        }else{
            document.querySelector("#alert-error").classList.remove("hidden");
            setTimeout(()=>{
                document.querySelector("#alert-error").classList.add("hidden")
            }, 5000)

        }
    }

    const handleCollection = async (event)=> {
        event.preventDefault();
        const collection = {
            Name: event.target.collectionName.value,
        }
        const res = await handleCreate(collection, "collections");
        if(res){
            document.querySelector("#alert-success").classList.remove("hidden");
            setTimeout(()=>{
                document.querySelector("#alert-success").classList.add("hidden")
            }, 5000)        }else{
            document.querySelector("#alert-error").classList.remove("hidden");
            setTimeout(()=>{
                document.querySelector("#alert-error").classList.add("hidden")
            }, 5000)

        }
    }

    return(
    <div className="modal" id="create-options-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="create-color-modal-head">Create Product</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div className="alert alert-success hidden" role="alert" id="alert-success">
                                <p>Operation completed successfully!</p>
                        </div>
                        
                        <div className="alert alert-warning hidden" role="alert" id="alert-error">
                            <p>Error completing operation, please try again later!</p>
                        </div>
                    <div className="modal-body container">
                        <div className="row mb-5">
                        <form className="col" onSubmit={(event)=>handleColor(event)}>
                        <div className="mb-3">
                            <label htmlFor="colorName" className="form-label">Color name</label>
                            <input type="text" className="form-control" id="colorName" placeholder="Color name here"/>
                            </div>
                            <div className="mb-3">
                            <label htmlFor="colorCode" className="form-label">Choose color code</label>
                            <input type="color" className="form-control w-25" id="colorCode"/>
                            </div>
                            <button type="btn" className="btn btn-primary" >Create Color</button>
                        </form>
                        <form className="col" onSubmit={(event)=>handleCollection(event)}>
                        <div className="mb-3">
                            <label htmlFor="collectionName" className="form-label">Collection name</label>
                            <input type="text" className="form-control" id="collectionName" placeholder="Collection name here"/>
                            </div>
                            <button type="btn" className="btn btn-primary">Create Collection</button>
                        </form>
                        </div>
                        <div className="row mb-5">
                        <form className="col" onSubmit={(event)=>handleCategory(event)}>
                        <div className="mb-3">
                            <label htmlFor="categoryName" className="form-label">Category name</label>
                            <input type="text" className="form-control" id="categoryName" placeholder="Category name here"/>
                            </div>
                            <button type="btn" className="btn btn-primary">Create Category</button>
                        </form>
                        <div className="col"></div>
                        </div>
                        </div>
                    <button type="button" className="btn btn-info btn-lg" data-bs-target={`#${form}-product-modal`} data-bs-toggle="modal">Previous</button>
                </div>
        </div>
    </div>

    )
}