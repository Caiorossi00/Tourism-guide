import React from "react";
import "./Navbar.css";
import { color } from "framer-motion";

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
