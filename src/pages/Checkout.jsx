import ToolBar from "../components/ToolBar";
import Register from "../components/Register";
import CheckoutBanner from "../components/CheckoutBanner";
import { useNavigate } from "react-router-dom";
import restService from "../services/restService";
import Feedback from "../components/Feedback";

export default function Checkout({ cart, fillCart, reduceCart, emptyCart }) {
  const navigate = useNavigate()

  const handleOrder = async (event)=>{
    event.preventDefault();
    const message = []
    cart.forEach(product => {
      message.push(` ${product.Name}: x${product.amount}`)
    });

    const genOrderNum = Math.floor(Math.random() * 10000)
    
    const content = {
      mailTo: event.target.email.value,
      orderNum: genOrderNum,
      message: `
      Tak for din bestilling!
      Ordre nummer: ${genOrderNum}
      Vi har modtaget din ordre på: 
      ${message.toString().trim()}.
      Vi vender snarest muligt tilbage angående betaling og levering!
      `
    }
    console.log(content);

    const res = await restService.sendMail(content)

    if(res){
      emptyCart()
      document.getElementById("feedback-success").classList.remove("hidden");
      setTimeout(()=>{ document.getElementById("feedback-success").classList.add("hidden")}, 3000)
    }
  }

  try {
      return (
        <div>
          <ToolBar cart={cart} emptyCart={emptyCart} />
          <div className="container">
            <div className="row my-5">
            <div className="col">
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
            </div>
              <div className="col">
                <h5 className="text-center">Indtast email for at placerer din ordre her:</h5>
                <form className="mt-3 mx-auto" onSubmit={(event)=>handleOrder(event)}>
                  <div className="row">
                    <label htmlFor="email" className="row">Email
                    </label>
                    <input name="email" type="email" placeholder="dinMail@mail.com" className="form-control col"/>
                    <button className="btn btn-outline-primary col ms-2" role="submit">Bestil</button>
                  </div>
                </form>
              </div>
            </div>
            <button className="btn btn-outline-secondary">
            <p onClick={()=>navigate("/")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
              </svg>
                Tilbage til butikken 
               </p>
            </button>
              <Feedback/>
          </div>
        </div>
      );
  } catch (error) {
    return (
      <>
        <ToolBar cart={cart} emptyCart={emptyCart} />
      </>
    );
  }
}
