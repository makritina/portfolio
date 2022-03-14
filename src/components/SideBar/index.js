import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const SideBar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={active ? "wrapper active" : "wrapper "}>
      <div className="sidebar">
        <div className="bg-shadow"></div>
        <div className="sidebar_inner">
          <div className="close" onClick={() => setActive(false)}>
            <i className="fas fa-times" aria-hidden="true"></i>
          </div>

          <div className="logos">
            <h2>Tina </h2>
            <span>Web Developer</span>
          </div>
          <ul className="sidebar_menu">
            <div className="links">
              <Link to="/">
                <div>Home </div>
              </Link>
            </div>

            <div className="links">
              <Link to="/about">
                <div>About</div>
              </Link>
            </div>

            <div className="links">
              <Link to="/work">
                <div>My Projects </div>
              </Link>
            </div>

            <div className="links">
              <Link to="/contact">
                <div>Contact</div>
              </Link>
            </div>
          </ul>

          <div className="social">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/tinaaa.makri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <i className="fab fa-facebook-f"></i>{" "}
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/stamatina-makri/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <i className="fab fa-linkedin-in"></i>{" "}
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/makritina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <i className="fab fa-github"></i>{" "}
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div className="top_navbar">
          <div className="hamburger" onClick={() => setActive(!active)}>
            <div className="hamburger__inner ">
              <i className="fas fa-bars" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
