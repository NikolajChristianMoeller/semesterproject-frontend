import { Link } from "react-router-dom"
import { useState } from "react";
import { createPortal } from "react-dom";
import AdminLogin from "./AdminLogin"


export default function ToolBar(){
    const [showModal, setShowModal] = useState(false);

        return(
            <header>
                <h2><Link to={".."} style={{textDecoration: "none", color:"black"}}>🏠</Link></h2>
                <button onClick={() => setShowModal(true)}>
                    Admin login
                </button>
        {showModal && createPortal(
          <AdminLogin onClose={() => setShowModal(false)} />,
          document.body
        )}
            </header>
        )
}



