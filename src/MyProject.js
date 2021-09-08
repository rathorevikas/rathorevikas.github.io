import React from "react";
import "./MyProject.css";
import AmazonClone from "./AmazonClone.png";
import Zoom from "react-reveal/Zoom";

const MyProject = () => {
  return (
    <div className="myproject" id="myproject">
      <h2 className="myproject__heading">My Recent Projects</h2>

      <div className="myproject__centered">
        <Zoom>
          <div className="myproject__content">
            <a
              href="https://clone-33f2d.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={AmazonClone} alt="" />
            </a>
            <h3>Amazon Fake Clone</h3>
          </div>
        </Zoom>
        <Zoom>
          <div className="myproject__content">
            <a
              href="https://clone-33f2d.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={AmazonClone} alt="" />
            </a>
            <h3>Amazon Fake Clone</h3>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default MyProject;
