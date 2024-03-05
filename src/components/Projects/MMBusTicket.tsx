import React from "react";
import mmbusproduct from "../../img/mmbus-product.png";
import mithril from "../../img/mithril.png";
import play from "../../img/play.png";
import node from "../../img/node.png";
import express from "../../img/express.png";
import postgresql from "../../img/postgresql.png";
import "./project-content.css";

const MMBusTicket = () => {
  return (
    <div className="mmbus-section vstack h-100 p-lg-5 p-md-4 p-sm-3 p-3">
      <div className="title text-center text-white">MMBusTicket</div>
      <div className="text-white text-center">
        MMBusTicket is a leading bus ticketing platform in Myanmar partnering
        with over 60 express bus operators, provides services through website,
        mobile apps, and wallet payment apps.
      </div>

      <div className="text-center">
        <img className="mmbus-img img-fluid" src={mmbusproduct} />
      </div>

      <div className="mt-auto hstack gap-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={mithril} />
          <div className="tech-label">Mithril</div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={node} />
          <div className="tech-label">Node</div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={express} />
          <div className="tech-label">Express</div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={play} />
          <div className="tech-label">Play</div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={postgresql} />
          <div className="tech-label">Postgresql</div>
        </div>
        <div className="ms-auto">
          <a
            href="https://www.mmbusticket.com/"
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

export default MMBusTicket;
