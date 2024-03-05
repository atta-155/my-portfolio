import React from "react";
import myanchaw from "../../img/myanchaw-product.png";
import react from "../../img/react.png";
import spring from "../../img/spring.png";
import "./project-content.css";

const MyanChaw = () => {
  return (
    <div className="myanchaw-section vstack h-100 p-lg-5 p-md-4 p-sm-3 p-3">
      <div className="title text-center text-white">
        MyanChaw Delivery Service
      </div>
      <div className="text-center text-white mb-5">
        The delivery service website that can track parcel numbers and compare
        delivery costs across multiple operators.
      </div>

      <div className="text-center mb-5">
        <img className="myanchaw-img img-fluid" src={myanchaw} />
      </div>

      <div className="mt-auto hstack gap-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={react} />
          <div className="tech-label">React</div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={spring} />
          <div className="tech-label">Spring</div>
        </div>
        <div className="ms-auto">
          <a
            href="https://www.myanchaw.com/"
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

export default MyanChaw;
