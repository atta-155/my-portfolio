import React from "react";
import innoveller from "../../img/innoveller-product.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import bootstrap from "../../img/bootstrap.png";
import "./project-content.css";

const Innoveller = () => {
  return (
    <div className="innoveller-section vstack h-100 p-lg-5 p-md-4 p-sm-3 p-3">
      <div className="title text-center">Innoveller</div>
      <div className="text-center mb-5">
        A software company landing website to showcase its products and
        services.
      </div>

      <div className="mb-5">
        <img className="innoveller-img img-fluid" src={innoveller} />
      </div>

      <div className="mt-auto hstack gap-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={html} />
          <div className="tech-label-light">Html</div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={css} />
          <div className="tech-label-light">Css</div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={bootstrap} />
          <div className="tech-label-light">Bootstrap</div>
        </div>

        <div className="ms-auto">
          <a
            href="http://www.innoveller.com/"
            target="_blank"
            className="App-link"
          >
            Visit site
          </a>
          <i className="fa-solid fa-chevron-right theme-color ps-2 fa-sm"></i>
        </div>
      </div>
    </div>
  );
};

export default Innoveller;
