import React from "react";
import mmquickshop from "../../img/mmquickshop-product.png";
import java from "../../img/java.png";
import hotelPMS from "../../img/hotel-product.png";
import kotlin from "../../img/kotlin.png";
import jetpackCompose from "../../img/jetpack-compose.png";

import "./project-content.css";

const HotelPMS = () => {
  return (
    <div className="hotelpms-section vstack h-100 p-lg-5 p-md-4 p-sm-3 p-3">
      <div className="title text-white text-center">Hotel PMS</div>
      <div className="text-center text-white mb-5">
        Hotel Property Management System to manage operations such as room
        reservations, guest check-in and check-out, housekeeping, rate
        management, room assignments, billing, and accounting.
      </div>

      <div className="text-center">
        <img className="hotelPMS-img img-fluid" src={hotelPMS} />
      </div>

      <div className="mt-auto hstack gap-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={kotlin} />
          <div className="tech-label">Kotlin</div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={jetpackCompose} />
          <div className="tech-label">Jetpack Compose</div>
        </div>
      </div>
    </div>
  );
};

export default HotelPMS;
