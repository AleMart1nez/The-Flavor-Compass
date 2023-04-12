import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "../NavbarRecipDet/NavbarRecipDet.css";

const NavbarRecip = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={images.theflavor} alt="app__logo" />
        </a>
      </div>
      <ul className="navbar">
        <li className="p__opensans">
          <Link to="/home">Back</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarRecip;

