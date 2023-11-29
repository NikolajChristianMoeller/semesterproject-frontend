import ToolBar from "../components/ToolBar";
import Register from "../components/Register";
import CheckoutBanner from "../components/CheckoutBanner";
import { Link } from "react-router-dom";

export default function Checkout({ cart, fillCart, reduceCart, emptyCart }) {
  try {
    if (cart.length >= 1) {
      return (
        <>
          <ToolBar cart={cart} emptyCart={emptyCart} />
          <Register
            cart={cart}
            fillCart={fillCart}
            reduceCart={reduceCart}
            emptyCart={emptyCart}
          />
          <CheckoutBanner cart={cart} />
          <button
            className="btn btn-outline-danger"
            onClick={() => emptyCart()}
          >
            Tøm Kurv
          </button>
        </>
      );
    } else {
      return (
        <div>
          <ToolBar cart={cart} emptyCart={emptyCart} />
          <h3>Din Kurv er tom 🙁</h3>
          <button
            className="btn btn-outline-primary"
            style={{ margin: "1rem" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Tilbage til butikken
            </Link>
          </button>
        </div>
      );
    }
  } catch (error) {
    return (
      <>
        <ToolBar cart={cart} emptyCart={emptyCart} />
      </>
    );
  }
}
