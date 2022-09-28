import React, { useState, useEffect } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoColorPalette } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

import underline from "./../assets/underline.png";
import "./../App.css";
import "./resume.css";

function Resume() {
  const [selection, setSelection] = useState();
  const [translate, setTranslate] = useState(0);
  useEffect(() => {
    if (selection == "edu") {
      setTranslate(null);
    }
    if (selection == "wrk") {
      setTranslate("translate1");
    }
    if (selection == "prg") {
      setTranslate("translate2");
    }
    if (selection == "int") {
      setTranslate("translate3");
    }
  }, [selection]);

  return (
    <div className="section-center" id="resume">
      <div className="resume-main">
        <div className="resume-header">
          <h1>Resume</h1>
          <img className="underline" src={underline} alt="underline" />
          <br />
          <br />
        </div>
        <div className="resume-content">
          {/* <button className="btn btn-resume">
            <a href="#">
              Download <br /> resume
            </a>
          </button> */}
          <div className="resume-tabs">
            <h3
              className={selection == "edu" ? "selected" : null}
              onClick={() => setSelection("edu")}>
              <FaUserGraduate />
              <span> Education</span>
            </h3>
            <h3
              className={selection == "wrk" ? "selected" : null}
              onClick={() => setSelection("wrk")}>
              <MdWorkOutline />
              <span> Work Experience</span>
            </h3>
            <h3
              className={selection == "prg" ? "selected" : null}
              onClick={() => setSelection("prg")}>
              <GiProgression />
              <span> Programing Skills</span>{" "}
            </h3>
            <h3
              className={selection == "int" ? "selected" : null}
              onClick={() => setSelection("int")}>
              <IoColorPalette />
              <span> Interests</span>
            </h3>
          </div>
          <div className="separator"></div>
          <div className="resume-details">
            <div className={`details-carousel ${translate}`}>
              <div id="edu" className="edu-block">
                <h3>
                  <span>Education</span>
                </h3>
                <br />
                <h4>
                  <span> ➣ </span>Fullstack Coding Bootcamp Graduate : <br />
                  <br />
                  <span>
                    Immersive Full-Stack Training Program in Python, Java, and
                    MERN{" "}
                  </span>
                </h4>
                <p>Coding Dojo | Online-Fulltime| May 2022 - Aug 2022</p>

                <h4>
                  <span> ➣ </span>Associate of Science: Computer Science
                </h4>
                <p>
                  College of San Mateo | San Mateo, CA| 2021 - Still enrolled
                </p>

                <h4>
                  <span> ➣ </span>High School Diploma
                </h4>
                <p>Rajapaksa College | Sri Lanka | 2003 - 2012</p>
                <br />
              </div>
              {/* work experience */}
              <div className="work-block">
                <h3>
                  <br />
                  <span>Work Experience</span>
                </h3>
                <br />
                <h4>
                  <span> ➣ </span>Store Associate
                </h4>
                <p>Lucky California | Foster City, CA | Jun 2020-Current</p>
                <br />
                <h4>
                  <span> ➣ </span>Credit Officer / Customer service
                  representative
                </h4>
                <p>Bank Of Ceylon | Colombo, Sri Lanka | Mar 2013-Jan 2020</p>
                <br />

                <br />
              </div>
              {/* prog skill */}
              <div className="prog-block">
                <h3>
                  <br />
                  <span>Programming skills</span>
                </h3>
                <br />
                <h4>
                  <span> ➣ </span>HTML5, CSS ,JavaScript(ES6, Node.js)
                </h4>
                <p>-------------</p>
                <h4>
                  <span> ➣ </span>MERN
                </h4>
                <p>------------</p>
                <h4>
                  <span> ➣ </span>Python / Flask
                </h4>
                <p>------------</p>
                <h4>
                  <span> ➣ </span>Java / Spring boot
                </h4>
                <p>------------</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
