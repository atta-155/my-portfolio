import React from "react";
import EducationCard from "./EducationCard";
function Education() {
  return (
    <div className="container-fluid full-screen">
      <div className="row">
        <div
          className="col-lg-8 col-md-10 col-12 row mx-auto gy-4 gx-4"
          style={{ display: "flex", flex: "flex-wrap" }}
        >
          <div className="col-lg-6 col-12">
            <EducationCard
              title="Bachelor Degree in Computer Science (B.C.Sc)"
              date="Dec, 2014 - Feb 2019"
              organization="University of Computer Studies, Taungoo (UCST)"
            ></EducationCard>
          </div>
          <div className="col-lg-6 col-12 ">
            <EducationCard
              title="National Team Selection for ACM-ICPC Programming Contest"
              date="Dec, 2014 - Feb 2019"
              organization="icpc.foundation"
            ></EducationCard>
          </div>
          <div className="col-lg-6 col-12">
            <EducationCard
              title="Samsung Tech Institute Mobile Application Training"
              date="Dec, 2014 - Feb 2019"
              organization="Global New Wave Technology Co.,Ltd"
            ></EducationCard>
          </div>
          <div className="col-lg-6 col-12">
            <EducationCard
              title="PHP Web Developer Bootcamp"
              date="Dec, 2014 - Feb 2019"
              organization="Myanmar IT Consulting"
            ></EducationCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
