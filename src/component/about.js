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
            <p className="p-lg">
              Self-taught as well as Coding dojo bootcamp grad Front end / Full
              stack Developer with in-depth knowledge of Html,CSS, JavaScript,
              MERN, Python/ Flask and Java/Spring boot. Skilled in utilizing
              extemal API's, as well as building back ends utilizing Sql or
              Mongo as database. Looking forward to start first career as a
              developer to put my skills to action.
            </p>
            <div className="button-conatainer">
              <a href="https://docs.google.com/document/d/1xQI95qJ41pudTeU4tWRMWi_Hv0LLHcKDHh-X4fTIPHc/edit?usp=sharing">
                <div className="btn">Resume</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
