import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars, FaWindowClose } from "react-icons/fa";
import "./../App.css";
import "./nav.css";

function Nav() {
  const [sideNav, setSideNav] = useState();
  const autoResize = () => {
    if (window.innerWidth >= 1200) {
      setSideNav("close");
    }
  };

  window.addEventListener("resize", autoResize);

  return (
    <div className="nav">
      <div className="nav-center ">
        <div className="nav-logo">
          <h1>
            Chamith <span className="nav-span">Gamage</span>
          </h1>
        </div>
        <div className="nav-links">
          <ul
            onClick={() => setSideNav("close")}
            className={sideNav === "open" ? "nav-show" : "nav-close"}>
            <li
              className={sideNav === "open" ? "btn-close" : "btn-close-hidden"}>
              <FaWindowClose />
            </li>
            <li>
              <AnchorLink href="#home">
                <h4>Home</h4>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">
                <h4>About</h4>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#resume">
                <h4>Resume</h4>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#projects">
                <h4>Projects</h4>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#testamonials">
                <h4>Teastamonials</h4>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#conatact">
                <h4>Contact Me</h4>
              </AnchorLink>
            </li>
          </ul>
        </div>
        <FaBars
          className="nav-toggle"
          onClick={() => {
            setSideNav("open");
          }}
        />
      </div>
    </div>
  );
}

export default Nav;
