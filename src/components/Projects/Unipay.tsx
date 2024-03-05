import React from "react";
import unipay from "../../img/unipay-product.png";
import react from "../../img/react.png";
import angular from "../../img/angular.png";
import "./project-content.css";

const Unipay = () => {
  return (
    <div className="unipay-section vstack h-100 p-lg-5 p-md-4 p-sm-3 p-3">
      <div className="title text-center">Unipay</div>
      <div className="text-center mb-5">
        Digital Payment System that simplify payments and transfers in Myanmar.
        Cash-in with Visa, Mastercard, and more. Top-up mobiles and shop
        hassle-free at merchant stores.
      </div>

      <div className="text-center">
        <img className="img-fluid" src={unipay} />
      </div>

      <div className="mt-auto hstack gap-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={react} />
          <div className="tech-label-light">React</div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={angular} />
          <div className="tech-label-light">Angular</div>
        </div>
        <div className="ms-auto">
          <a
            href="https://play.google.com/store/apps/details?id=com.burma.unipay2&hl=en_US"
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

export default Unipay;
