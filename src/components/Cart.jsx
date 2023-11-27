import totalItems from "./TotalItems";
import totalPrice from "./TotalPrice";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart }) {
  try {
    const [products, setProducts] = useState(cart);

    return (
      <div>
        <section id="product-grid">
          {products.map((product) => (
            <section className="product" key={product.ID}>
              <p>{product.Name}</p>
              <p>Qty: {product.amount}</p>
              <p>Price: {product.Price * product.amount}kr</p>
              <div className="colors">
                {product.ProductColor.map((color) => (
                  <div
                    className="color-dot"
                    key={product.ID + color.ID}
                    style={{ backgroundColor: color.Code }}
                  />
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className="cart">
          <p>Total {totalPrice(products)}kr</p>
          <p>Items in Cart {totalItems(products)}</p>
          <button onClick={() => setProducts([])}>Empty cart</button>
          <button>
            <Link
              to="../products"
              state={{ checkout: products }}
              style={{ textDecoration: "none", color: "black" }}
            >
              Continue shopping
            </Link>
          </button>
        </section>
      </div>
    );
  } catch (error) {
    return <p>Cart is empty</p>;
  }
}
