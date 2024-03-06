import ExperienceCard from "./ExperienceCard";
import "./timeline.css";

const Experience = () => {
  return (
    <div className="container py-5 ">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <ul className="timeline">
            <ExperienceCard
              jobTitle="Senior Frontend Developer"
              company="Young Investment Group"
              duration="March, 2023 - Present"
              descList={[
                "Contributed to the development and maintenance of enterprise-level Digital Payment System.",
                "Engaged in the development of the Travel Insurance Project, incorporating seamless payment processing through CyberSource Payment Integrator.",
                "Work closely with the design and QA team to ensure the quality of the software.",
                "Provide documentation and user-manual to internal and external users.",
              ]}
            ></ExperienceCard>

            <ExperienceCard
              jobTitle="Software Developer"
              company="Innoveller Co.,ltd"
              duration="July, 2020 - Mar 2023 (2 years, 8 months)"
              descList={[
                "Development of a comprehensive Bus Ticket Booking Platform featuring a diverse network of over 70 bus operators.",
                "Designed and implemented complex database and user interface solutions.",
                "Develop the user interface design and prototype utilizing Figma and Infinity Designer.",
                "Execute project development across web, Progressive Web App (PWA), and Android platforms for comprehensive reach and accessibility.",
              ]}
            ></ExperienceCard>

            <ExperienceCard
              jobTitle="Software Developer Internship"
              company="Pearl Yadana Software Solution Co.,ltd"
              duration="May, 2019 - July 2019 (3 months)"
              descList={[
                "Learn and apply new skills and technologies.",
                "Developed a Human Resource Management System as the final group project.",
              ]}
            ></ExperienceCard>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
