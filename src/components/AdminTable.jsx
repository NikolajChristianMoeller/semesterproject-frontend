export default function AdminTable({ products, deleteClicked, updateClicked }) {
  return (
    <table className="table">
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
            <td>{product.Stock}</td>
            <td>
              <button
                className="btn btn-danger rounded-pill"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#delete-modal"
                onClick={() => deleteClicked(product)}
              >
                Delete
              </button>
              <button
                className="btn btn-info ms-2 rounded-pill"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#update-modal"
                onClick={() => updateClicked(product)}
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
