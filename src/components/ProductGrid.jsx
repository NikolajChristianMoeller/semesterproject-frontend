import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductGrid({ products, fillCart }) {
  const navigate = useNavigate();

  try {
    return (
      <div className="container">
        <div className="row gy-5">
          {products.map((product) => (
            <div className="col-lg-3" key={product.ID}>
              <div className="card">
                <img
                  src="/vite.svg"
                  className="card-img-top"
                  onClick={() => navigate("product/" + product.ID)}
                  style={{ cursor: "pointer" }}
                />
                <p className="card-header" style={{ height: "8vh" }}>
                  {product.Name}
                </p>
                <p className="ms-5 pt-3">{product.Price}kr</p>
                <div className="colors card-footer">
                  {product.Colors.map((color) => (
                    <div
                      className="color-dot"
                      key={product.ID + color.Code}
                      style={{ backgroundColor: color.Code }}
                    />
                  ))}
                </div>
                <button
                  onClick={() => fillCart(product)}
                  className="btn btn-light"
                >
                  Tilføj til kurv 🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <>
        <h3>Error getting products :( </h3>
        <p>{error.message}</p>
      </>
    );
  }
}
