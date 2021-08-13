import React from "react";
import "./index.css";
import logo from "../../inkode.png";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="div-logo">
        <img src={logo} className="img-nav" alt="logo" />
      </div>
      <div className="div-menu">
        <h1 className="menu">menu</h1>
      </div>
    </nav>
  );
};

export default Navbar;
