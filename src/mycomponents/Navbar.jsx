
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Navbar.css';



function Navbar() {
  return (
    <>
    <nav className="navbar">
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <div className="container">
    <Link className="navbar-brand" to="">
      <img src="/img/logo.jpg" alt="" width="170px" height="50px"/>
    </Link>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" id="home" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" id="about" to="/About">About Us</Link>
        <Link className="nav-link" id="project" to="/Project">Project</Link>
        <Link className="nav-link " id="service" to="/service">Service</Link>
        <Link id="contact" className="nav-link"   to="/Contact">contact us</Link>
      </div>
    </div>
  </div>
</nav>
</nav>
</>
  );
}

export default Navbar;
