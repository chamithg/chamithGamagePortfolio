import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars, FaWindowClose, FaAngleDoubleUp } from "react-icons/fa";
import "./../App.css";
import "./nav.css";

function Nav() {
  const [sideNav, setSideNav] = useState();
  const [showNavToggle, setShowNavToggle] = useState();
  const autoResize = () => {
    if (window.innerWidth >= 1200) {
      setSideNav("close");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setShowNavToggle(true);
      } else {
        setShowNavToggle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  window.addEventListener("resize", autoResize);

  return (
    <div className="nav" id="nav">
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
            {/* <li>
              <AnchorLink href="#testamonials">
                <h4>Teastamonials</h4>
              </AnchorLink>
            </li> */}
            <li>
              <AnchorLink href="#contact">
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

      <AnchorLink href="#nav">
        <FaAngleDoubleUp
          className={showNavToggle ? "back-to-top" : "back-to-top-hidden"}
        />
      </AnchorLink>
    </div>
  );
}

export default Nav;
