import React from "react";
import "./MyJourney.css";
import RoomIcon from "@material-ui/icons/Room";
import { Link } from "react-scroll";
import Flip from 'react-reveal/Flip';

//My Experience page name changed
const MyJourney = () => {
  return (
    <div className="myjourney" id="myjourney">
      <h2 className="myjourney__heading">My Experience</h2>
      <div className="myjourney__centered">
        <div className="myjourney__timeline">

        <Flip top>
          <div className="myjourney__point">
            <div className="myjourney__icon">
              <RoomIcon
                style={{
                  display: "block",
                  fontSize: 40,
                  marginTop: 8,
                  marginLeft: 4,
                }}
              />
            </div>
            <div className="myjourney__block">
              <span className="myjourney__date">July 2019 - Current</span>
              <div className="myjourney__content">
                <h3>Wipro Limited</h3>
                <h4>Project Engineer</h4>
                <p>
                  ▪️ I have been working effectively with cross-functional teams
                  to develop application that elevated client side experience
                  and
                  <br></br> &nbsp;&nbsp;&nbsp; significantly improved overall
                  functionality and preformance.
                </p>
                <p>
                  ▪️ Take part in monthly deployment activity and work on issues
                  raised by our clients.
                </p>
                <p>
                  ▪️ Discuss project progress with the customers, collect the
                  feedback on different stages and directly address the
                  concerns.
                </p>
              </div>
            </div>
          </div>
          </Flip>

          <Flip top>
          <div className="myjourney__point">
            <div className="myjourney__icon">
              <RoomIcon
                style={{
                  display: "block",
                  fontSize: 40,
                  marginTop: 8,
                  marginLeft: 4,
                }}
              />
            </div>
            <div className="myjourney__block">
              <span className="myjourney__date">Jun 2018 - July 2018</span>
              <div className="myjourney__content">
                <h3>Flagbits India</h3>
                <h4>Intern</h4>
                <p>
                  ▪️ Gained strong experience in Web Development and understand
                  how to work in an organisation.
                </p>
                <p>
                  ▪️ Worked in a team and developed multiple website's pages for
                  Clients.
                </p>
                <p>▪️ Learned HTML & CSS tips and tricks from my seniors.</p>
              </div>
            </div>
          </div>
          </Flip>

          <Flip top>
          <div className="myjourney__point">
            <div className="myjourney__icon">
              <RoomIcon
                style={{
                  display: "block",
                  fontSize: 40,
                  marginTop: 8,
                  marginLeft: 4,
                }}
              />
            </div>
            <div className="myjourney__block">
              <span className="myjourney__date">Aug 2015 - Aug 2019</span>
              <div className="myjourney__content">
                <h3>Noida Institute of Engineering & Technology</h3>
                <h4>B.Tech ( Computer Science )</h4>
                <p>
                  ▪️ Completed my Graduation in Bachelor of Technology in
                  Computer Science with 74.1%{" "}.
                </p>
              </div>
            </div>
          </div>
          </Flip>

          <p className="about__smallpara">Let's See what we have next !</p>
          <div className="about__symbol">
            <Link to="myproject" smooth={true}>
              <span className="about__symbolDown">&#8628;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
