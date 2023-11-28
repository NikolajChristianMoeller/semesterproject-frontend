import {Routes, Route, Navigate, Outlet} from "react-router-dom"
import HomePage from "../pages/Homepage"
import Checkout from "../pages/Checkout"
import Admin from "../pages/Admin";
import { useState } from "react";
import Login from "../pages/Login";

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

  const emptyCart = ()=> {
    setCart([]);
  }


  const AdminAuth = () => {
    const isAuthenticated = sessionStorage.getItem("authenticated")
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };



  return(
      <Routes>
        <Route path="/" element={<HomePage fillCart={fillCart} cart={cart} emptyCart={emptyCart}/>}/>
        <Route path="/checkout" element={<Checkout cart={cart} fillCart={fillCart} reduceCart={reduceCart} emptyCart={emptyCart}/>}/>
        <Route element={<AdminAuth />}>
          <Route path="/admin" element={<Admin cart={cart} emptyCart={emptyCart}/>} />
        </Route>
        <Route path="login" element={<Login cart={cart} emptyCart={emptyCart}/>}/>
      </Routes>
    )
}

