import {Routes, Route} from "react-router-dom"
import HomePage from "../pages/Homepage"
import Products from "../pages/Products"
import Checkout from "../pages/Checkout"

export default function Router(){
  return(
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    )
}

