import {Routes, Route} from "react-router-dom"
import HomePage from "../pages/Homepage"
import Checkout from "../pages/Checkout"
import { useState } from "react";

export default function Router(){
  const [cart, setCart] = useState([]);

    
  const fillCart = (product)=> {
    try {
      if(cart.includes(product)){
        cart[cart.indexOf(product)].amount++
        setCart([...cart]);

      }else{
        product.amount = 1;
        setCart([...cart, product]);
      }
    } catch (error) {
      console.error("error adding to cart", error)
    }
  }

  const reduceCart = (product) => {
    try {
      if(product.amount > 1){
        cart[cart.indexOf(product)].amount--
        setCart([...cart]);
      }else{
        cart.splice([cart.indexOf(product)], 1);
        setCart([...cart]);
      }
    } catch (error) {
      console.error("error adding to cart", error)
    }

  }

  return(
      <Routes>
        <Route path="/" element={<HomePage fillCart={fillCart} cart={cart}/>}/>
        <Route path="/checkout" element={<Checkout cart={cart} fillCart={fillCart} reduceCart={reduceCart}/>}/>
      </Routes>
    )
}

