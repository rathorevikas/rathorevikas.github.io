import React, { useState } from "react";
import "./Contact.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import emailjs from "@emailjs/browser";
import Slide from "react-reveal/Slide";

const Contact = () => {
  const [showResult, setShowResult] = useState(false);
  const [showError, setShowError] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vrm5tq",
        "template_d7ojopo",
        e.target,
        "user_jJkEvNvJXhialLig9yYta"
      )
      .then(
        (result) => {
          //console.log(result.text);
          setShowResult(true);
          setShowError(false);
        },
        (error) => {
          //console.log(error.text);
          setShowResult(false);
          setShowError(true);
        }
      );

    e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <h2>Say Hello !</h2>
      <div className="contact__centered">
        <Slide left>
          <div className="contact__left">
            <form className="contact__form" onSubmit={sendEmail}>
              <label htmlFor="">Name</label>
              <input type="text" name="name" required />
              <label htmlFor="">Email</label>
              <input type="email" name="email" required />
              <label htmlFor="">Message</label>
              <textarea rows="10" name="message" required></textarea>
              <button type="submit">Submit</button>
              {showResult && (
                <p className="contact__success">
                  Your Request has been sent Successfully !
                </p>
              )}
              {showError && (
                <p className="contact__error">
                  Something Went worng. Please try again later !
                </p>
              )}
            </form>
          </div>
        </Slide>

        <div className="contact__right">
          <Slide right>
            <div className="contact__oval1">
              <LinkedInIcon
                style={{
                  display: "block",
                  fontSize: 40,
                  marginTop: 8,
                  marginLeft: 4,
                  marginRight: 2,
                  color: "#5e5a3c",
                }}
              />
              <a
                href="https://www.linkedin.com/in/vikas-rathore-681437217/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="contact__para">
                  linkedin.com/in<br></br>/vikas-rathore-681437217/
                </p>
              </a>
            </div>
          </Slide>

          <Slide right delay={200}>
            <div className="contact__oval2">
              <GitHubIcon
                style={{
                  display: "block",
                  fontSize: 40,
                  marginTop: 8,
                  marginLeft: 4,
                  marginRight: 2,
                  color: "#5e5a3c",
                }}
              />
              <a
                href="https://github.com/rathorevikas"
                target="_blank"
                rel="noreferrer"
              >
                <p className="contact__para">
                  github.com<br></br>/rathorevikas/
                </p>
              </a>
            </div>
          </Slide>

          <Slide right>
            <div className="contact__oval3">
              <LocationCityIcon
                style={{
                  display: "block",
                  fontSize: 40,
                  marginTop: 8,
                  marginLeft: 4,
                  marginRight: 2,
                  color: "#5e5a3c",
                }}
              />
              <p className="contact__para">
                New Ashok Nagar,<br></br>New Delhi-110096, India.
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Contact;
