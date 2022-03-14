import React from "react";
import "./style.scss";

const About = (props) => {
  return (
    <div className="about">
      <div className="wrap">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 aboutme ">
              <h1>About me</h1>
              <p id="pabout">
                I'm Front-End Developer located in Greece. Well-organised
                person, problem solver, with high attention to detail. I love
                working collaboratively, but can also run projects on my own.
                Building state-of-the-art, easy to use, user-friendly websites
                is truly a passion of mine and I am confident I would be an
                excellent addition to your organization.
              </p>
            </div>
            <div className="col-lg-6 skills">
              <span>HTML</span>
              <div className="progress" id="progress">
                <div className="progress-value-html"></div>
              </div>
              <span>JavaScript</span>
              <div className="progress">
                <div className="progress-value-js"></div>
              </div>

              <span>CSS</span>
              <div className="progress">
                <div className="progress-value-css"></div>
              </div>

              <span>React Js</span>
              <div className="progress">
                <div className="progress-value-react"></div>
              </div>
            </div>
          </div>
          <div className="icons">
            <span>
              <i className="fab fa-react fa-2x jello-horizontal"></i>
            </span>
            <span>
              <i className="fab fa-html5 fa-2x jello-horizontal"></i>
            </span>
            <span>
              <i className="fab fa-js fa-2x jello-horizontal"></i>
            </span>
            <span>
              <i className="fab fa-css3 fa-2x jello-horizontal"></i>
            </span>
            <span>
              <i className="fab fa-github fa-2x jello-horizontal"></i>
            </span>
            <span>
              <i className="fas fa-database fa-2x jello-horizontal"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
