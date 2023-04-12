import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <a href="https://www.linkedin.com/in/alejandro-martinez-0a536b258">
          <img src={images.linkedin} alt="linkedin" />
        </a>
        <p className="p__opensans">Linkedin</p>
        <p className="p__opensans">Alejandro Martinez</p>
        <p className="p__opensans">Estudiante de Henry</p>
      </div>

      <div className="app__footer-links_logo">
        <a href="https://www.soyhenry.com">
          <img src={images.logohenry} alt="henry" />
        </a>
        <p className="p__opensans">Proyecto Individual.</p>
      </div>

      <div className="app__footer-links_work">
        <img src={images.mail} alt="linkedin" />
        <p className="p__opensans">Correo Electrónico:</p>
        <p className="p__opensansfooter">alejandrofabian00@hotmail.com</p>

      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Henry Food PI.</p>
    </div>
  </div>
);

export default Footer;
