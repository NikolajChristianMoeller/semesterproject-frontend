import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Auth(){
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const users = [{ username: "Jane", password: "testpassword" }];
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const account = users.find((user) => user.username === username);
      if (account && account.password === password) {
        sessionStorage.setItem("authenticated", true);
        navigate("/admin");
      } else{
        document.getElementById("alert").classList.remove("hidden");
      }
    }
    return (
        <div>
            <h2 className="text-center">Login</h2>
            <form style={{maxWidth:"40vw", marginLeft:"auto", marginRight:"auto"}} id="login-form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="login-username"
                    onChange={(e) => setusername(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="login-password" className="form-label">Password</label>
                <input type="password" className="form-control" id="login-password" onChange={(e) => setpassword(e.target.value)}/>
            </div>
            <button className="btn btn-primary">Submit</button>
            <div className="alert alert-danger hidden" role="alert" id="alert">
                Incorrect username or password!
            </div>
            </form>
        </div>
    )
}