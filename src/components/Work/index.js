import React from "react";
import "./style.scss";
import burger from "./../../assets/burger.png";
import movie from "./../../assets/movie.png";
import bootstrap from "./../../assets/bootstrap.png";

const Work = (props) => {
  return (
    <div className="work">
      <div className="wrap">
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            <h2 className="page-section-heading text-center text-white mb-0">
              My Projects
            </h2>

            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star bounce-in-top"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal1"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <p>Brochure Burger Website</p>
                      <span> React Js HTML CSS JavaScript Bootstrap </span>
                    </div>
                  </div>
                  <img className="img-fluid" src={burger} alt="..." />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal2"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <p>Api Movie Browser Project </p>
                      <span> React Js HTML CSS JavaScript Bootstrap </span>
                    </div>
                  </div>
                  <img className="img-fluid" src={movie} alt="..." />
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#portfolioModal3"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <p>Bootstrap Project </p>
                      <span> HTML CSS JavaScript Bootstrap </span>
                    </div>
                  </div>
                  <img className="img-fluid" src={bootstrap} alt="..." />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
