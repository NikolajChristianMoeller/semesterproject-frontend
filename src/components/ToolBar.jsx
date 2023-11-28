import Cart from "./Cart";
import { Link, useNavigate } from "react-router-dom";

export default function ToolBar({ cart, emptyCart }) {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar fixed navbar-light bg-light"
      aria-label="Offcanvas navbar large"
    >
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            MikroHome
          </Link>
        </div>
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
              MikroHome
            </h5>
            <button
              type="button"
              className="btn-close btn-close-black"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/checkout"
                  style={{ textDecoration: "none", color: "black" }}
                  className="nav-link active"
                  aria-current="page"
                >
                  Checkout
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                  className="nav-link active"
                  aria-current="page"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/admin"
                  style={{ textDecoration: "none", color: "black" }}
                  className="nav-link active"
                  aria-current="page"
                >
                  Admin
                </Link>
              </li>
            </ul>
            <form className="d-flex mt-3 mt-lg-0" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <Cart cart={cart} emptyCart={emptyCart} />
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
  );
}
