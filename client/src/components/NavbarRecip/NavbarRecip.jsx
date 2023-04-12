import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "../NavbarRecip/NavbarRecip.css";

const NavbarRecip = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.theflavor} alt="app__logo" />
      </div>
      <ul className="navbar">
        <li className="p__opensans">
          <Link to="/">Back Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarRecip;

