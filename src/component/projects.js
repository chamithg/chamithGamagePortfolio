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
              <a href="https://github.com/chamithg ">
                <button className="btn">Github</button>
              </a>
              <h3>or</h3>
              <a href="https://app.netlify.com/teams/chamithg/overview">
                <button className="btn">Netlify</button>
              </a>
            </div>
          </div>
          <div className="project-body">
            <div className="card project1">
              <div className="projInfo proj1">
                <h3>➤ English Portfolio</h3>
                <p>
                  A website to showcase my works related to ESL 400 class, built
                  with JavaScript,HTML and CSS
                </p>
                <ul>
                  <li>
                    Styled front end with vanilla Javascript and CSS, and HTML
                    in order to deepen my grasp of styling languages without the
                    support of front end framework
                  </li>
                </ul>
                <br />
                <br />
                <br />
                <h4>
                  <a href="https://github.com/chamithg/ESL-portfolio.git">
                    Github
                  </a>{" "}
                  |{" "}
                  <a href="https://chamith-gamage-portfolio.netlify.app">
                    Live site
                  </a>
                </h4>
              </div>
            </div>
            <div className="card project2">
              <div className="projInfo proj2">
                <h3>➤ Weather Snap - Real time </h3>
                <p>
                  This app gives the current weather status of any city, built
                  with React Javascript, HTML and CSS
                </p>
                <div className="proj-info">
                  <ul>
                    <li>
                      Leverage React / Context to create responsive websites
                      with a coherent global state to provide optimal user
                      experience.
                    </li>
                    <li>
                      Integrated weather bit API together with Axios to smoothly
                      handle the http requests and fetch data.
                    </li>
                    <li>
                      Future upgrades: This is still under development and some
                      features are yet to be added. a 7 day weather forecast
                      will be added.
                    </li>
                  </ul>
                </div>
                <br />
                <h4>
                  <a href="https://github.com/chamithg/weather-snap.git">
                    Github
                  </a>{" "}
                  | <a>Demo(TBA) </a>
                </h4>
              </div>
            </div>
            <div className="card project3">
              <div className="projInfo proj3">
                <h3> ➤ Lucky Mart Inventory manager / Sales Planner </h3>
                <p>
                  A grocery store management tool with delegated functions for
                  different levels of management, built with JavaScript, HTML5,
                  CSS,Python and MySQL
                </p>
                <div className="proj-info-1">
                  <ul>
                    <li>
                      This app lets the user AKA store managers to monitor and
                      plan the sales performance and shrink details of
                      inventory.
                    </li>
                    <li>
                      Sales progress can be monitored as departments, categories
                      or per individual item.
                    </li>
                    <li>
                      Designed and developed the front end with JavaScript,
                      HTML5, CSS as well as Bootstrap to test out different
                      styling methods.
                    </li>
                    <li>
                      Created SQL backend based on all 3 types of relationships
                      to contain and organise the inventory over 100 items.
                    </li>
                    <li>
                      Leveraged Python and Flask to maintain smooth connection
                      between frontend and backend.
                    </li>
                    <li>
                      Added data visualisation with Charts JS to make the front
                      end more interactive.
                    </li>
                  </ul>
                </div>
                <br />
                <h4>
                  <a href="https://github.com/chamithg/luckyMartInventory.git">
                    Github
                  </a>{" "}
                  | <a>Demo(TBA)</a>
                </h4>
              </div>
            </div>
            <div className="card project4">
              <div className="projInfo proj4">
                <h3> ➤ National Fuel Pass </h3>
                <p>
                  A fuel distribution management app created with JavaScript,
                  HTML5, CSS, Java/Spring Boot and MySQL
                </p>
                <div className="proj-info">
                  <ul>
                    <li>
                      This app lets users register as a consumer and add
                      multiple vehicles to each consumer. Each vehicle will be
                      given a default weekly fuel quota depending on the vehicle
                      type.
                    </li>
                    <li>
                      Consumers can monitor and enhance their quota to meet
                      their requirements.
                    </li>
                    <li>
                      Also, Users can register as a filling station and issue
                      fuel to each vehicle and keep track of their fuel stocks.
                    </li>
                    <li>
                      Designed and developed the front end with JavaScript,
                      HTML5, CSS as well as Bootstrap to test out different
                      styling methods.
                    </li>
                  </ul>
                </div>
                <br />
                <h4>
                  <a href="https://github.com/chamithg/fuelPass-Spring.git">
                    Github
                  </a>{" "}
                  | <a>Live site(TBA)</a>
                </h4>
              </div>
            </div>
            {/* <div className="card project5">project5</div>
            <div className="card project6">project6</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
