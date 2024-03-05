import React, { useEffect } from "react";
import "./App.css";
import "./components/common/side-bar.css";
import "./components/common/SidebarScrollSpy";
import HeroSection from "./components/HeroSection/HeroSection";
import Project from "./components/Projects/Project";
import ProjectContent from "./components/Projects/ProjectContent";
import Experience from "./components/Experience/Experience";
import ExperienceTitle from "./components/Experience/ExperienceTitle";
import EducationTitle from "./components/Education/EducationTitle";
import Education from "./components/Education/Education";
import TechnicalSkillTitle from "./components/TechnicalSkill/TechnicalSkillTitle";
import TechnicalSkill from "./components/TechnicalSkill/TechnicalSkill";
import Footer from "./components/Footer/Footer";

function App() {
  // const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    // console.log("scrollYProgress: ", scrollYProgress);
    // window.addEventListener("scroll", function () {
    //   var home = document.getElementById("home")!!;
    //   var project = document.getElementById("project")!!;
    //   var projectContent = document.getElementById("project-content")!!;
    //   // var headers = document.getElementsByClassName("header")!!;
    //   // var projectTitle = document.getElementById("projectTitle")!!;
    //   var scrollY = window.scrollY;
    //   var homeOffsetTop = home.offsetTop;
    //   console.log(scrollY);
    //   let homeOpacity = 1;
    //   homeOpacity = 1 - (scrollY / 500 - 1); //calculate opacity value based on scrollY
    //   homeOpacity = Math.min(1, Math.max(0, homeOpacity)); // to limit opacity between 0 and 1
    //   console.log("homeOpacity: ", homeOpacity);
    //   home.style.opacity = homeOpacity.toString();
    //   let projectOpacity = 1;
    //   if (homeOpacity <= 0) {
    //     var lastScrollTop =
    //       window.scrollY || document.documentElement.scrollTop;
    //     var currentScrollTop =
    //       window.scrollY || document.documentElement.scrollTop;
    //     if (currentScrollTop > lastScrollTop) {
    //       // Scrolling down
    //       project.style.opacity = projectOpacity.toString();
    //       project.style.animationName = "fadeIn";
    //       project.style.animationDuration = "1s";
    //     } else {
    //       // Scrolling up
    //       project.style.opacity = projectOpacity.toString();
    //       project.style.animationName = "fadeIn";
    //       project.style.animationDuration = "1s";
    //     }
    //     lastScrollTop = currentScrollTop;
    //   }
    //   if (scrollY > 2000) {
    //     var projectOffsetTop = project.offsetTop;
    //     project.style.position = "relative";
    //     project.style.top = projectOffsetTop.toString();
    //     projectContent.style.display = "block";
    //   }
    //   if (scrollY == 0) {
    //     // home.style.opacity = "1";
    //     // project.style.opacity = "0";
    //     // projectContent.style.display = "none";
    //   }
    // });
  }, []);

  return (
    <div className="App">
      <div className="root-section">
        <HeroSection></HeroSection>

        <Project></Project>

        <ProjectContent></ProjectContent>

        <div id="experience">
          <ExperienceTitle></ExperienceTitle>
          <Experience></Experience>
        </div>

        <div id="education">
          <EducationTitle></EducationTitle>
          <Education></Education>
        </div>

        <div id="technical-skill">
          <TechnicalSkillTitle></TechnicalSkillTitle>
          <TechnicalSkill></TechnicalSkill>
        </div>

        <div id="footer">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
