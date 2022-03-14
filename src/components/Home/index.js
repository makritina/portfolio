import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Home = (props) => {
  return (
    <div className="home">
      <div className="wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="waveTop"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F34BB3"
            fillOpacity="1"
            d="M0,0L48,0C96,0,192,0,288,16C384,32,480,64,576,69.3C672,75,768,53,864,80C960,107,1056,181,1152,176C1248,171,1344,85,1392,42.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <div className="container ">
          <div className="row">
            <div className="col-sm-8 pl-5 col-home">
              <p>
                Hi <span className="text-flicker-in-glow">!</span> <br></br>
                I'm Tina, <br></br>
                Front-end Developer
              </p>

              <button className="btn">
                <Link to="/contact">Contact Me</Link>
              </button>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
