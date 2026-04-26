import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <img src="/images/eGov-Foundation-768x291.png" alt="eGov" height="30" />
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
