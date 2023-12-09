import React from "react";
import "./About.css";
import mypic from "./pic.jpg";
import { Link } from "react-scroll";
import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="about__heading">About Me</h2>
      <div className="about__centered">
        <Slide left> 
        <div className="about__container">
          <div className="about__image">
            <img src={mypic}  alt="" />
          </div>
          <div className="about__info">
            <h2>Hi! My name is Vikas Rathore.</h2>
            <p>
              I love designing websites, mobile apps and branding for clients.
            </p>
            <p>My key strengths are given below :-</p>
            <ul>
              <li>React Js</li>
              <li>Redux / Context Api</li>
              <li>React + Firebase</li>
              <li>JavaScript</li>
              <li>HTML + CSS</li>
              <li>MUI / BootStrap</li>
            </ul>
            <p>
              I have been designing for the web since 2018 ( Experience -
              4yrs), but that doesn't matter much now, as everything is
              changing! I rather say I'll never stop learning 😃
            </p>
          </div>
        </div>
        </Slide>
      </div>
      <p className="about__smallpara">My overall Experience till now!</p>
      <div className="about__symbol">
        <Link to="myjourney" smooth={true}>
          <span className="about__symbolDown">&#8628;</span>
        </Link>
      </div>
    </div>
  );
};

export default About;
