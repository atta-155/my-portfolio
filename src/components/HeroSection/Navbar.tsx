import React, { useState } from "react";
import "./navbar.css";
import logo from "../../img/logo-without-text.png";
import facebook from "../../img/facebook.png";
import linkedIn from "../../img/linkedIn.png";
import github from "../../img/github.png";

enum NavItem {
  Home = "HOME",
  Projects = "PROJECTS",
  Experience = "EXPERIENCE",
  Education = "EDUCATION",
  Skill = "SKILL",
}
function Navbar() {
  const [activeItem, setActiveItem] = useState(NavItem.Home);
  const [navState, setNavState] = useState(false);

  const handleItemClick = (itemName: NavItem) => {
    setActiveItem(itemName);
  };
  const openNav = () => {
    console.log("openNav");
    setNavState(true);
    document.getElementById("myNav")!!.style.height = "100%";
  };
  const closeNav = () => {
    setNavState(false);

    document.getElementById("myNav")!!.style.height = "0";
  };

  return (
    <div
      className="d-flex align-items-center justify-content-between w-100 py-lg-5 py-4 px-4 px-lg-5"
      style={{ zIndex: 3 }}
    >
      <div className="">
        <img src={logo} className="img-fluid brand-logo"></img>
      </div>

      <div className="d-none d-lg-block ">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              className={
                activeItem === NavItem.Home ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              href="#home"
              onClick={() => handleItemClick(NavItem.Home)}
            >
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                activeItem === NavItem.Projects ? "nav-link active" : "nav-link"
              }
              href="#project"
              onClick={() => handleItemClick(NavItem.Projects)}
            >
              PROJECTS
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                activeItem === NavItem.Experience
                  ? "nav-link active"
                  : "nav-link"
              }
              href="#experience"
              onClick={() => handleItemClick(NavItem.Experience)}
            >
              EXPERIENCE
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                activeItem === NavItem.Education
                  ? "nav-link active"
                  : "nav-link"
              }
              aria-current="page"
              href="#education"
              onClick={() => handleItemClick(NavItem.Education)}
            >
              EDUCATION & CERTIFICATE
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                activeItem === NavItem.Skill ? "nav-link active" : "nav-link"
              }
              href="#technical-skill"
              onClick={() => handleItemClick(NavItem.Skill)}
            >
              SKILL
            </a>
          </li>
        </ul>
      </div>

      <div className="d-none d-lg-block">
        <div className="row">
          <div className="col">
            <a
              href="https://www.linkedin.com/in/aye-theint-theint-aung-12b790222/"
              target="_blank"
            >
              <img src={linkedIn} className="img-fluid social-icon"></img>
            </a>
          </div>
          <div className="col">
            <a href="https://www.facebook.com/xing.ai.756" target="_blank">
              <img src={facebook} className="img-fluid social-icon"></img>
            </a>
          </div>
          <div className="col">
            <a href="https://github.com/atta-155" target="_blank">
              <img src={github} className="img-fluid social-icon"></img>
            </a>
          </div>
        </div>
      </div>

      <div className="d-block d-lg-none">
        <i className="fa-solid fa-bars menu-bar" onClick={openNav}></i>

        <div
          id="myNav"
          className={navState ? "d-block overlay" : "d-none overlay"}
        >
          <a className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div className="overlay-content">
            <a href="#home" onClick={closeNav}>
              HOME
            </a>
            <a href="#project" onClick={closeNav}>
              PROJECTS
            </a>
            <a href="#experience" onClick={closeNav}>
              EXPERIENCE
            </a>
            <a href="#education" onClick={closeNav}>
              EDUCATION & CERTIFICATE
            </a>
            <a href="#technical-skill" onClick={closeNav}>
              SKILL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
