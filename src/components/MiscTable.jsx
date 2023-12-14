export default function MiscTable({ objects, deleteClicked, table, handleUpdate }) {

  const isColor = (object)=>{
    if (table === "colors"){
      return(
          <input id={object.Name+"-picker"} disabled type="color" defaultValue={object.Code}>
          </input>
      )
    } else{
      return
    
    }
  }

  const handleEdit = (event, object)=>{
    const input = document.getElementById(object.Name+"-input");
    const submit = document.getElementById(object.Name+"-submit");


    if(table === "colors"){
      const colorPicker = document.getElementById(object.Name+"-picker");
      if(input.disabled){
        event.target.textContent = "Cancel"
        event.target.classList.remove("btn-info")
        event.target.classList.add("btn-secondary")
        input.disabled = false;
        colorPicker.disabled = false;
        input.classList.remove("transparent-input")
        submit.classList.remove("hidden")
      } else {
        event.target.textContent = "Update"
        event.target.classList.remove("btn-secondary")
        event.target.classList.add("btn-info")
        input.disabled = true;
        colorPicker.disabled = true;
        input.classList.add("transparent-input")
        submit.classList.add("hidden")
      }
    }else{
      if(input.disabled){
        event.target.textContent = "Cancel"
        event.target.classList.remove("btn-info")
        event.target.classList.add("btn-secondary")
        input.disabled = false;
        input.classList.remove("transparent-input")
        submit.classList.remove("hidden")
      } else {
        event.target.textContent = "Update"
        event.target.classList.remove("btn-secondary")
        event.target.classList.add("btn-info")
        input.disabled = true;
        input.classList.add("transparent-input")
        submit.classList.add("hidden")
      }
    }    
  }

  const handleSubmit = (id)=>{
    if(table === "colors"){
      const object = {
        ID: id,
        Name: document.getElementById(id+"-input").value, 
        Code: document.getElementById(id+"-picker").value 
      }
      handleUpdate(object, table)
      handleEdit(id)
    } else {
      const object = {
        ID: id,
        Name: document.getElementById(id+"-input").value, 
      }
      handleUpdate(object, table)
      handleEdit(id)
    }
  }

    return (
      <table className="table table-light table-striped hidden" id={table+"-list"}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col"></th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {objects.map((object) => (
            <tr key={object.ID || object.Code}>
              <th><input id={object.Name+"-input"}defaultValue={object.Name} disabled className="form-control text-black transparent-input"></input></th>
              <td>{isColor(object)}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#delete-modal"
                  onClick={() => deleteClicked(object, table)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                  </svg>
                </button>
                <button
                  className="btn btn-info ms-2 "
                  type="button"
                  onClick={(event) => handleEdit(event, object)}
                >
                  Update 
                </button>
                <button
                  id={object.Name+"-submit"}
                  className="btn btn-success hidden ms-2 submit"
                  type="button"
                  onClick={() => handleSubmit(object)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  