import React from "react";
import mmquickshop from "../../img/mmquickshop-product.png";
import java from "../../img/java.png";

import "./project-content.css";

const MMQuickShop = () => {
  return (
    <div className="mmquickshop-section vstack h-100 p-5">
      <div className="title text-center">MMQuickShop</div>
      <div className="text-center mb-5">
        An ecommerce application that show orders and notify on new orders.
      </div>

      <div className="text-center">
        <img className="mmquickshop-img img-fluid" src={mmquickshop} />
      </div>

      <div className="mt-auto hstack gap-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="tech-icon img-fluid" src={java} />
          <div className="tech-label-light">Java</div>
        </div>
      </div>
    </div>
  );
};

export default MMQuickShop;
