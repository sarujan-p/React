import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <div className="navbar">
      <div className="nav-heading">
        <h1>The Book Shop</h1>
      </div>
      <div className="nav-link">
        <Link className="nav-home" to="/">Home</Link>
        <Link className="create-link" to="/create">Craete</Link>
        <Link className="login-link" to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;