import React from "react";
import image from "./../assets/hero.jpg";
import shape from "./../assets/shape.jpg";
import { SiNetlify } from "react-icons/si";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";

import "./../App.css";
import "./hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="section-center">
        <div className="hero-center">
          <div className="hero-info">
            <div className="hero-icons">
              <span>
                <a href="https://github.com/chamithg">
                  <BsGithub />
                </a>
                <a href="https://www.linkedin.com/in/chamith-gamage-6aa1a1213">
                  <BsLinkedin />
                </a>
                <a href="https://facebook.com/chamith.harshana">
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
                <span># </span> Python / Flask
              </h3>
              <h3>
                <span># </span> Java / Spring Boot
              </h3>
              <div className="hero-btn-container">
                <AnchorLink href="#contact">
                  <button className="btn hero-btn">Hire Me!</button>
                </AnchorLink>

                <a href="https://docs.google.com/document/d/1xQI95qJ41pudTeU4tWRMWi_Hv0LLHcKDHh-X4fTIPHc/edit?usp=sharing">
                  <button className="btn hero-btn">Resume</button>
                </a>
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
