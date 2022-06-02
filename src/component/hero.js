import React from "react";
import image from "./../assets/hero.jpg";
import shape from "./../assets/shape.jpg";
import { SiNetlify } from "react-icons/si";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

import "./../App.css";
import "./hero.css";

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="section-center">
        <div className="hero-center">
          <div className="hero-info">
            <div className="hero-icons">
              <span>
                <a href="#">
                  <BsGithub />
                </a>
                <a href="#">
                  <BsLinkedin />
                </a>
                <a href="#">
                  <BsFacebook />
                </a>
                <a href="https://app.netlify.com/teams/chamithg/overview">
                  <SiNetlify />
                </a>
              </span>
            </div>
            <br />
            <br />
            <div className="hero-tag">
              <h3>
                Hello, Im <span className="hero-span">Chamith,</span>
              </h3>
              <br />
              <h4>
                an enthusiastic{" "}
                <span className="hero-span">Frontend/Fullstack dev</span>{" "}
                seeking the first job and knows how to work with
              </h4>
              <br />
              <h3>
                <span># </span> HTML / CSS / Bootstrap
              </h3>
              <h3>
                <span># </span> Javascript{" "}
              </h3>
              <h3>
                <span># </span> MERN{" "}
              </h3>
              <h3>
                <span># </span> python
              </h3>
              <div className="hero-btn-container">
                <button className="btn hero-btn">Hire Me!</button>
                <button className="btn hero-btn">Resume</button>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src={image} alt="hero" />
          </div>
        </div>
      </div>
      <img classname="shape" src={shape} alt="" />
    </div>
  );
}

export default Hero;
