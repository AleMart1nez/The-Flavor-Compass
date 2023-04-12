import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Single Project" />
      <h1 className="headtext__cormorant">thanks for watching</h1>
      <p className="p__opensans">Henry Food Proyect</p>
    </div>
  </div>
);

export default Newsletter;
