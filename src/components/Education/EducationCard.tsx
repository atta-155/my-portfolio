import React from "react";

interface Props {
  title: string;
  date?: string | "";
  organization: string;
}

function EducationCard(props: Props) {
  return (
    <div
      className="card p-lg-5 p-4 v-stack h-100"
      style={{ backgroundColor: "#0F0E14", borderRadius: "20px" }}
    >
      <div className="subtitle-1  mb-4">{props.title}</div>

      <span className="mt-auto small text-gray">
        <i className="fa fa-clock-o mr-1"></i>
        {props.date}
      </span>
      <div className="text-white">{props.organization}</div>
    </div>
  );
}

export default EducationCard;
