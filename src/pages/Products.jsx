import { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import ToolBar from "../components/ToolBar";
import { useLocation } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  try {
    const location = useLocation();
    const { checkout } = location.state;
    return (
      <div>
        <ToolBar />
        <h3>Katalog</h3>
        <ProductGrid products={products} checkout={checkout} />
      </div>
    );
  } catch (error) {
    return (
      <div>
        <ToolBar />
        <h3>Katalog</h3>
        <ProductGrid products={products} checkout={[]} />
      </div>
    );
  }
}
