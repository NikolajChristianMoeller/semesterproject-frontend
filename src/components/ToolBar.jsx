import { Link } from "react-router-dom"
import { useState } from "react";
import { createPortal } from "react-dom";
import AdminLogin from "./AdminLogin"


export default function ToolBar(){
    const [showModal, setShowModal] = useState(false);

        return(
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
        <Link to={"/"} style={{textDecoration: "none", color:"black"}} className="nav-link active" aria-current="page">MikroHome 🏠</Link>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

/* 

            <header>
                <h2><Link to={"/"} style={{textDecoration: "none", color:"black"}}>🏠</Link></h2>
                <button onClick={() => setShowModal(true)} className="btn btn-primary">
                    Admin login
                </button>
        {showModal && createPortal(
          <AdminLogin onClose={() => setShowModal(false)} />,
          document.body
        )}
            </header>
*/
        ) 
}



