import React from "react";
import "./MyJourney.css";
import RoomIcon from "@material-ui/icons/Room";
import { Link } from "react-scroll";
import Flip from "react-reveal/Flip";

const MyJourneyData = [
  {
    date: "Dec 2022 - Present",
    companyName: "Infosys",
    designation: "SOFTWARE ANALYST",
    summaryPoints: [
      "Developed & Maintained reusable component using React Js and also used MobX / Zustand for state management.",
      "Using same reusable components for creating pages for web applications.",
    ],
  },

  {
    date: "May 2022 - Nov 2022",
    companyName: "Publicis Sapient",
    designation: "Associate",
    summaryPoints: [
      "Created a fully functional E-Commerce project with React js and Redux in my internal assignment.",
      "Completed React Js 2022 Udemy Course with Certification.",
    ],
  },

  {
    date: "July 2019 - May 2022 ",
    companyName: "Wipro Limited",
    designation: "Project Engineer",
    summaryPoints: [
      "I have been working effectively with cross-functional teams to develop application thatelevated client side experience and significantly improved overall functionality and preformance elevated client side experience and significantly improved overall functionality and preformance.",
      "Take part in monthly deployment activity and work on issues raised by our clients.",
      "Discuss project progress with the customers, collect the feedback on different stages and directly address the concerns.",
    ],
  },

  {
    date: "Jun 2018 - July 2018",
    companyName: "Flagbits India",
    designation: "Intern",
    summaryPoints: [
      "Gained strong experience in Web Development and understand how to work in an organisation.",
      "Worked in a team and developed multiple website's pages for Clients.",
      "Learned HTML & CSS tips and tricks from my seniors.",
    ],
  },

  {
    date: "Aug 2015 - July 2019",
    companyName: "Noida Institute of Engineering & Technology",
    designation: "B.Tech ( Computer Science )",
    summaryPoints: [
      "Completed my Graduation in Bachelor of Technology in Computer Science with 74.1%.",
    ],
  },
];

//My Experience page name changed
const MyJourney = () => {
  return (
    <div className="myjourney" id="myjourney">
      <h2 className="myjourney__heading">My Experience</h2>
      <div className="myjourney__centered">
        <div className="myjourney__timeline">
          {MyJourneyData.map((item) => (
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
                  <span className="myjourney__date">{item.date}</span>
                  <div className="myjourney__content">
                    <h3>{item.companyName}</h3>
                    <h4>{item.designation}</h4>
                    <ul>
                      {item.summaryPoints.map((point) => (
                        <li>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Flip>
          ))}

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
