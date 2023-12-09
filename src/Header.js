import React from "react";
import Fade from "react-reveal/Fade";
import "./Header.css";
import { Link } from "react-scroll";
import VikasResume from "./VikasRathore.pdf";

const Header = () => {
  return (
    <div className="header" id="header">
      <h1 className="header__title">
        Hi,<span className="type">I'm Vikas ;)</span>
      </h1>
      <p className="header__para">
        I'm a <span className="type">Web Developer</span> 💗
      </p>
      <Fade left>
        <div className="header__download">
          <a href={VikasResume} download="vikas_resume">
            Download Resume
          </a>
        </div>
        <p className="header__smallpara">Learn more about what I do</p>
      </Fade>
      <div className="header__symbol">
        <Link to="about" smooth={true}>
          <span className="header__symbolDown">&#8628;</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
