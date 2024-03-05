import Navbar from "./Navbar";
import "./herosection.css";
import HorizontalLine from "../common/HorizontalLine";
import CV_Form from "../../img/ATTA_CV_Form.pdf";
import { useEffect, useState } from "react";
import Atropos from "atropos/react";
import bgGradient from "../../img/bg-gradient.png";
import mmbusBg from "../../img/mmbus-bg.png";
import heroBg from "../../img/hero-bg.png";
import gradientCircle from "../../img/gradient-circle.svg";

function HeroSection() {
  // const [opacity, setOpacity] = useState(1);

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY;

  //   const newOpacity = 1 - scrollPosition / 1000;
  //   setOpacity(newOpacity > 0 ? newOpacity : 0);
  // if (opacity == 0) {
  //   document.getElementById("home")!!.classList.add("d-none");

  //   document.getElementById("project")!!.classList.remove("d-none");
  //   document.getElementById("project")!!.classList.add("d-block");
  // }

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const downloadResume = () => {
    // Create a link element
    const link = document.createElement("a");

    // Set the download attribute of the link and the href to the file URL
    link.href = CV_Form;
    link.download = "CV_Form_ATTA.pdf"; // Set the desired file name

    // Append the link to the document and trigger a click
    document.body.appendChild(link);
    link.click();

    // Clean up the link element
    document.body.removeChild(link);
  };

  return (
    <div id="home" style={{ position: "relative" }}>
      <div className="hero-section">
        <Navbar></Navbar>
        {/*
          <img
            src={gradientCircle}
            // data-atropos-offset="-10"
            className="herosection-bg-left"
          ></img> */}

        {/* <img
            src={gradientCircle}
            // data-atropos-offset="-10"
            className="herosection-bg-right"
          ></img> */}

        <div
          className="d-flex flex-column justify-content-center align-items-center"
          // data-atropos-offset="-5"
          // style={{
          //   position: "absolute",
          //   top: 0,
          //   left: 0,
          //   width: "100%",
          //   height: "100%",
          // }}
        >
          {/* Hello line */}
          <div className="d-flex justify-content-center align-items-center mb-4">
            <HorizontalLine />
            <div className="subtitle-2">Hello</div>
            <HorizontalLine />
          </div>

          {/* Content body */}
          <div className="title-no-color text-center mb-4">
            <span className="d-md-inline d-block herosection-no-color-title">
              I am{" "}
            </span>
            <span className="herosection-color-title theme-color">
              Aye Theint Theint Aung
            </span>
          </div>

          <div className="subtitle-1 text-center">Frontend Developer</div>
          <div className="decor-text text-center">
            “Blending creativity with technical expertise...”
          </div>

          {/* <div className="btn pill-button my-5" onClick={downloadResume}>
              Download Resume
            </div> */}

          <div
            className="btn btn-outline-primary my-5"
            data-bs-toggle="modal"
            data-bs-target="#downloadModal"
          >
            Download Resume
          </div>

          {/* footer */}
          {/* <div className="small-text mb-3">Find me in</div>
        <div className="row gx-3">
          <div className="col">
            <i
              className="fa-brands fa-linkedin fa-lg"
              style={{ color: "#c4c4c4" }}
            ></i>
          </div>
          <div className="col">
            <i
              className="fa-brands fa-square-facebook fa-lg"
              style={{ color: "#c4c4c4" }}
            ></i>
          </div>
          <div className="col">
            <i
              className="fa-solid fa-envelope fa-lg"
              style={{ color: "#c4c4c4" }}
            ></i>
          </div>
        </div> */}
        </div>

        {/* Scroll button */}
        <div className="scroll-indicator">
          <a href="#project" style={{ textDecoration: "none" }}>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <span className="text pb-5">Scroll down</span>
          </a>
        </div>
      </div>

      <div
        className="modal fade"
        id="downloadModal"
        tabIndex={-1}
        aria-labelledby="downloadModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Download</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure to download?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => downloadResume()}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
