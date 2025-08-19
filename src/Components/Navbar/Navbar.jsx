import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="">
          <h1>BV</h1>
        </a>
      </div>
      <div className="menu">
        <ul className="nav-menu">
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Resume</li>
        </ul>
        <div className="nav-connect">Get in touch</div>
      </div>
    </div>
  );
};

export default Navbar;
