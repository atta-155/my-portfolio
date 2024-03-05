import React from "react";
import insurance from "../../img/insurance-product.png";
import react from "../../img/react.png";
import bootstrapDark from "../../img/bootstrap-dark.png";
import "./project-content.css";

const TravelInsurance = () => {
  return (
    <div className="insurance-section vstack h-100 p-lg-5 p-md-4 p-sm-3 p-3">
      <div className="title text-center">Insurance</div>
      <div className="text-center mb-5">
        Purchase travel insurance for foreign visitors to Myanmar, featuring
        seamless payment processing through Cybersource integration.
      </div>

      <div className="text-center">
        <img className="insurance-img img-fluid" src={insurance} />
      </div>

      <div className="mt-auto hstack gap-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={react} />
          <div className="tech-label-light">React</div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={bootstrapDark} />
          <div className="tech-label-light">Bootstrap</div>
        </div>

        <div className="ms-auto">
          <a
            href="https://travel-uat.younggeneralmm.com/"
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

export default TravelInsurance;
