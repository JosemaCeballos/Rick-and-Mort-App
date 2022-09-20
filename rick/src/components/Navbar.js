import React from "react";
import "./Navbar.css";

const Navbar = ({ brand }) => {
  return (
    <div>
      <nav className="navbar nashent">
        <div className="container">
          <a
            href="/"
            className="navbar-brand text-uppercase fs-4 fw-bolder lh-base"
          >
            {brand}
          </a>
          <div>
            <a href="https://www.linkedin.com/in/jose-maria-ceballos-a3379524a/">
              <img
                className="tamanioo"
                src="https://img.icons8.com/ios-filled/344/linkedin-circled--v5.png" alt="linkedin-img"
              />
            </a>
            <a href="https://github.com/JosemaCeballos">
              <img
                className="tamanioo"
                src="https://img.icons8.com/ios-filled/344/github.png" alt="github-img"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
