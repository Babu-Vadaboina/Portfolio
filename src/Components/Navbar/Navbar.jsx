import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-menu">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Resume</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
