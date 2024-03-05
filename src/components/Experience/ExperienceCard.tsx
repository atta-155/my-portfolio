import React from "react";

interface Props {
  jobTitle: string;
  company: string;
  duration: string;
  descList: string[];
}

function ExperienceCard(props: Props) {
  return (
    <li className="timeline-item ml-3 p-lg-5 p-md-5 p-sm-3 p-3 shadow gradient-bg">
      <div className="subtitle-1 mb-0">{props.jobTitle}</div>
      <span className="small text-gray">
        <i className="fa fa-clock-o mr-1"></i>
        {props.duration}
      </span>
      <div className="mb-0">{props.company}</div>

      <ul className="mt-4 desc-list">
        {props.descList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export default ExperienceCard;
