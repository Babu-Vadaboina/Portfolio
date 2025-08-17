import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu">
        <ul className="nav-menu">
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Resume</li>
        </ul>
        <div className="nav-connect">Connect with me</div>
      </div>
    </div>
  );
};

export default Navbar;
