import React from "react";
import './Navbar.css'

const Navbar = ({ brand }) => {
  return (
    <div>
      <nav className="navbar nashent">
        <div className="container">
          <a href="/" className="navbar-brand text-uppercase fs-4 fw-bolder lh-base">
            {brand}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
