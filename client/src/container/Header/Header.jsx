import React from "react";
import { Link } from "react-router-dom";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Explore new tastes, one recipe at a time" />
      <h1 className="app__header-h1">The Flavor Compass</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}> 
        The Flavor Compass is an app that helps you discover new recipes and explore new flavors.
        You can search for recipes based on your preferences and make them. 
        Our app makes cooking an enjoyable experience for all skill levels.{" "}
      </p>
      <Link to="/home">
      <button type="button" className="custom__button">
        Explore our recipes
      </button>
      </Link>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
