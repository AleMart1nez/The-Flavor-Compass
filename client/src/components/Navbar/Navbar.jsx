import React from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={images.theflavor} alt="app__logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans">
          <a href="#start">Start</a>
        </li>
        <li className="p__opensans">
          <a href="#aboutproyect">About</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <Link to="/home" className="p__opensans">
          Recipes
        </Link>
        <div />
        <Link to="recipes/create" className="p__opensans">
          Create Recipe
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
