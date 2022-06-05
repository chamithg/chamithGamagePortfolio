import React from "react";
import "./../App.css";
import "./projects.css";

function Projects() {
  return (
    <div className="project" id="projects">
      <div className="section-center ">
        <div className="project-main">
          <div className="project-title">
            <h1>Projects</h1>
            <h3>All projects can be found on</h3>
            <div className="project-btn-container">
              <button className="btn">Github</button>
              <h3>or</h3>
              <button className="btn">Netlify</button>
            </div>
          </div>
          <div className="project-body">
            <div className="card project1">project1</div>
            <div className="card project2">project2</div>
            <div className="card project3">project3</div>
            <div className="card project4">project4</div>
            <div className="card project5">project5</div>
            <div className="card project6">project6</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
