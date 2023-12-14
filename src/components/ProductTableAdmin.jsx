export default function ProductTableAdmin({ products, deleteClicked, updateClicked, adjustStock }) {

  const handleClick = (event, product)=>{
    event.preventDefault()
    const input = document.getElementById(product.ID+"-stock")
    const submit = document.getElementById(product.ID+"-submit")
    if(input.disabled){
      input.disabled = false;
      event.target.textContent = "Cancel"
      submit.classList.remove("hidden")
    } else {
      input.value = product.Stock
      input.disabled = true;
      event.target.textContent = "Adjust"
      submit.classList.add("hidden")
    }
  }

  const handleSubmit = (e, product)=>{
    e.preventDefault();
    const form = e.target;
    adjustStock(product.ID, form.stock.value)
    form.stock.disabled = true;
    form.querySelector("button").textContent = "Adjust"
    form.querySelector("button:last-child").classList.add("hidden")
  }


  return (
    <table className="table table-light table-striped" id="product-list">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Produkt</th>
          <th scope="col">Stock</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.ID}>
            <th scope="row">{product.ID}</th>
            <td>{product.Name}</td>
            <td>
              <form onSubmit={(event)=>handleSubmit(event, product)}>
                <input className="form-control w-25" name="stock"id={product.ID+"-stock"} disabled defaultValue={product.Stock}/>
            <button className="btn btn-secondary ms-2" onClick={(event)=>handleClick(event, product)}>
              Adjust
            </button>
            <button role="submit" className="btn btn-success ms-2 hidden" id={product.ID+"-submit"}>
              OK
            </button>
              </form>
            </td>
            <td>
              <button
                className="btn btn-outline-danger"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#delete-modal"
                onClick={() => deleteClicked(product, "products")}
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
                className="btn btn-info ms-2"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#update-modal"
                onClick={() => updateClicked(product, "products")}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
