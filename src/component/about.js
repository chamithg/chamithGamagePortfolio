import React from "react";
import underline from "./../assets/underline.png";
import about from "./../assets/about1.jpg";
import "./../App.css";
import "./about.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-center">
        <h1>
          About <span>Me</span>
        </h1>
        <br />
        <img className="underline" src={underline} alt="underline" />
        <br />
        <br />

        <div className="about-main">
          <div className="about-image">
            <img src={about} alt="about" />
          </div>
          <div className="about-info">
            <p>
              Self-taught as well as Coding dojo bootcamp grad Front end / Full
              stack Developer with in-depth knowledge of Html,CSS, JavaScript,
              MERN and python. Skilled in utilizing extemal Al's, developing,
              optimizing, and reworking systems to meet specific customer
              requirements. Looking forward to start first career as a developer
              to put my skills to action.
            </p>
            <div className="button-conatainer">
              <div className="btn">Resume</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
