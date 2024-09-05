import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img
          src={logo}
          alt="Logo"
        />
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/contact">Contact</Link>
        </div>
        <div className="navbar-Auth">
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>

      </div>
    </nav>
  );
};

export default Navbar;
