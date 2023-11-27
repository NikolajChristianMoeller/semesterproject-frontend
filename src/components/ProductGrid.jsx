import { useState } from "react";
import { Link } from "react-router-dom";
import totalItems from "./TotalItems";
import totalPrice from "./TotalPrice";
import { useEffect } from "react";
/* eslint-disable react/prop-types */
export default function ProductGrid({ products, checkout }) {
  const [cart, setCart] = useState(checkout);

  function addToCart(product) {
    if (cart.includes(product)) {
      cart[cart.indexOf(product)].amount =
        cart[cart.indexOf(product)].amount + 1;
      setCart([...cart]);
    } else {
      product.amount = 1;
      setCart([...cart, product]);
    }
  }
  // Loads the basket from local storage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (savedCart.length > 0) {
      setCart(savedCart);
    }
  }, []);
  // Saves basket to local storage and checks if the cart has been emptied
  useEffect(() => {
    console.log("saving");
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  try {
    return (
      <div className="store">
        <section id="product-grid">
          {products.map((product) => (
            <div className="product" key={Math.Random()}>
              <p style={{ fontWeight: "900" }}>{product.Name}</p>
              <p>{product.Price}kr</p>
              <p>{product.Description}</p>
              <p>{product.Stock}</p>
              <div className="colors">
                {product.ProductColor.map((color) => (
                  <div
                    className="color-dot"
                    key={product.ID + color.ID}
                    style={{ backgroundColor: color.Code }}
                  />
                ))}
              </div>
              <button onClick={() => addToCart(product)}>
                Tilføj til kurv 🛒
              </button>
            </div>
          ))}
        </section>
        <section className="cart">
          <p>Vare i kurv: {totalItems(cart)}</p>
          <p>Total {totalPrice(cart)}kr</p>
          <button onClick={() => setCart([])}>Tøm kurv</button>
          <br />
          <button>
            <Link
              to="../checkout"
              state={{ cart: cart }}
              style={{ textDecoration: "none", color: "black" }}
            >
              Til Kassen!
            </Link>
          </button>
        </section>
      </div>
    );
  } catch (error) {
    return (
      <div className="store">
        <section id="product-grid">
          {products.map((product) => (
            <section className="product" key={product.ID}>
              <p>{product.Name}</p>
              <p>{product.Price}kr</p>
              <p>{product.Description}</p>
              <div className="colors">
                {product.ProductColor.map((color) => (
                  <div
                    className="color-dot"
                    key={product.ID + color.ID}
                    style={{ backgroundColor: color.Code }}
                  />
                ))}
              </div>
              <button onClick={() => addToCart(product)}>
                Tilføj til kurv 🛒
              </button>
            </section>
          ))}
        </section>
        <section className="cart">
          <p>Items in cart: {totalItems(cart)}</p>
          <p>Total {totalPrice(cart)}kr</p>
          <button onClick={() => setCart([])}>Empty cart</button>
          <br />
          <button>
            <Link
              to="../checkout"
              state={{ cart: cart }}
              style={{ textDecoration: "none", color: "black" }}
            >
              Til Kassen!
            </Link>
          </button>
        </section>
      </div>
    );
  }
}
