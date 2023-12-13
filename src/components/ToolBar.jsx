import totalItems from "../services/TotalItems";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import TopBannerCarousel from "./TopBannerCarousel";


export default function ToolBar({ cart, emptyCart, handleSearch }) {
  const navigate = useNavigate();
  return (
      <div className="sticky-top">

      <TopBannerCarousel/>
    <nav
      className="navbar sticky-top navbar-light bg-body-tertiary"
      aria-label="Offcanvas navbar large"
    >
      <div className="container-fluid">
        <div className="navbar-brand">
        <h5 onClick={()=>navigate("/")} style={{ cursor: "pointer"}}
            >
              MikroHome
            </h5>
        </div>
        <ul className="ms-auto mb-2 mb-lg-0">
          <div className="dropstart nav-item">
            <button
              className="btn btn-light dropdown-toggle me-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src="/basket3-fill.svg" />
              <span className="position-absolute start-50 badge rounded-pill bg-danger">{totalItems(cart)}</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <Cart
                  cart={cart}
                  emptyCart={emptyCart}
                  className="dropdown-item"
                />
              </li>
            </ul>
          </div>
        </ul>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end text-bg-light"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            <h5 onClick={()=>navigate("/")} style={{ cursor: "pointer"}}
            >
              MikroHome
            </h5>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-black"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
          <form className="d-flex mt-3 mt-lg-0" role="search" onSubmit={(event)=>handleSearch(event)}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Søg efter produkt"
                name="search"
              />
              <button className="btn btn-outline-success" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>
              </button>
            </form>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <p onClick={()=>navigate("../checkout")} style={{ cursor: "pointer"}}
                >
                Til Kassen
                </p>
              </li>
              <li className="nav-item">
              <p onClick={()=>navigate("../login")} style={{ cursor: "pointer"}}
            >
              Login
            </p>
              </li>
              <li className="nav-item">
              <p onClick={()=>navigate("../admin")} style={{ cursor: "pointer"}}
            >
              Admin
            </p>
              </li>
            </ul>
            <button
              className="nav-item btn btn-outline-danger"
              onClick={() => {
                sessionStorage.removeItem("authenticated");
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
