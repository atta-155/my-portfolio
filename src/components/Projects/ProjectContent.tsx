import React from "react";
import "./project-content.css";
import MMBusTicket from "./MMBusTicket";
import MMQuickShop from "./MMQuickShop";
import HotelPMS from "./HotelPMS";
import Innoveller from "./Innoveller";
import TravelInsurance from "./TravelInsurance";
import MyanChaw from "./MyanChaw";
import Unipay from "./Unipay";
function ProjectContent() {
  return (
    <div className="container-fluid bg-white" id="project-content">
      <div className="row project-content">
        <div className="col-12 col-md-6 p-2">
          <MMBusTicket></MMBusTicket>
        </div>
        <div className="col-12 col-md-6 p-2">
          <Unipay></Unipay>
        </div>
        <div className="col-12 col-md-6 p-2">
          <Innoveller></Innoveller>
        </div>
        <div className="col-12 col-md-6 p-2">
          <HotelPMS></HotelPMS>
        </div>
        <div className="col-12 col-md-6 p-2">
          <MyanChaw></MyanChaw>
        </div>
        <div className="col-12 col-md-6 p-2">
          <TravelInsurance></TravelInsurance>
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
