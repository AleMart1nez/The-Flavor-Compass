import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id="aboutproyect">
    <div className="app__wrapper_info">
      <SubHeading title="Single Project" />
      <h1 className="headtext__cormorant">About this project</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
          Explore New Tastes, One Recipe At A Time.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          The main idea is that this app is a useful and convenient tool for 
          anyone looking for new ideas and ways to cook delicious meals at home...
          Users are able to filter recipes, they are able to see the instructions 
          and ingredients of each dish, they are even able to add their own recipes 
          to the web.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Alejandro Martinez</p>
        <p className="p__opensans">Estudiante de Henry</p>
      </div>
    </div>
  </div>
);

export default Chef;
