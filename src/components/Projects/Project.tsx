import React, { useEffect, useState } from "react";

function Project() {
  // const [opacity, setOpacity] = useState(1);

  // const handleScroll = () => {
  //   const project = document.getElementById("project");

  //   const scrollPosition = window.scrollY;
  //   const elementOffset = project!!.offsetTop;
  //   const windowHeight = window.innerHeight;

  //   const newOpacity =
  //     0 + (scrollPosition - elementOffset + windowHeight) / windowHeight;
  //   setOpacity(newOpacity);
  // };

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="project"
      className="container-fluid full-screen project-title-section"
      // style={{ opacity }}
    >
      <div className="header" id="project-title">
        Projects
      </div>
      <div className="subtitle-3 text-center">
        Here are a few past projects I've worked on...
      </div>
    </div>
  );
}

export default Project;
