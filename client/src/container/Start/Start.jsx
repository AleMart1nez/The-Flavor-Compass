import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./Start.css";

const Start = () => (
  <div
    className="app__start app__bg flex__center section__padding"
    id="start"
  >
    <div className="app__start-overlay flex__center">
      <img src={images.H} alt="flower_overlay" />
    </div>

    <div className="app__start-content flex__center">
      <div className="app__start-content_about">
        <h1 className="headtext__cormorant">Recipes</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Search through our extensive collection of recipes and find the perfect one for your next culinary adventure. 
        With our user-friendly search interface, you can easily filter your results and explore a variety of dishes. 
        Get inspired and find your new favorite recipe today!
        </p>
        <Link to="/home">
          <button type="button" className="custom__button">
          Explore
          </button>
          </Link>
      </div>

      <div className="app__start-content_pleasure flex__center">
        <img src={images.pleasure} alt="about_pleasure" />
      </div>

      <div className="app__start-content_history">
        <h1 className="headtext__cormorant">Create Your Recipe</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Unleash your inner chef and create your own delicious recipe with our easy-to-use recipe creator. 
        Our platform allows you to input your own ingredients, cooking instructions, and photos to make your recipe come to life. 
        Start creating today!
        </p>
        <Link to="/recipes/create">
        <button type="button" className="custom__button">
          Create
        </button>
        </Link>
      </div>
    </div>
  </div>
);

export default Start;
