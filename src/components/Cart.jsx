import totalItems from "../services/TotalItems";
import totalPrice from "../services/TotalPrice";
import { Link } from "react-router-dom";

export default function Cart({ cart, emptyCart }) {
  try {
    return (
      <section className="text-center" style={{ width: "18rem" }}>
        <h4>Kurv</h4>
        <ul className="list-group list-group-flush">
          {cart.map((product) => (
            <li key={product.ID + "cart"} className="list-group-item">
              {product.Name}: x{product.amount}
            </li>
          ))}
        </ul>
        <p>Total: {totalPrice(cart)}kr</p>
        <p>Produkter i Kurv: {totalItems(cart)}</p>
        <button className="btn btn-outline-success">
          <Link
            to="../checkout"
            style={{ textDecoration: "none", color: "black" }}
          >
            Til Kassen 
          </Link>
        </button>
        <button className="btn btn-outline-danger" onClick={() => emptyCart()}>
          Tøm Kurv
        </button>
      </section>
    );
  } catch (error) {
    return (
      <div>
        <p>Cart is empty</p>
      </div>
    );
  }
}
