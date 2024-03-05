import React from "react";
import HorizontalLine from "../common/HorizontalLine";
import html from "../../img/techstack/html.png";
import css from "../../img/techstack/css.png";
import javascript from "../../img/techstack/javascript.png";
import typescript from "../../img/techstack/typescript.png";
import bootstrap from "../../img/techstack/bootstrap.png";
import react from "../../img/techstack/react.png";
import antDesign from "../../img/techstack/ant-design.png";
import mithril from "../../img/techstack/mithril.png";
import play from "../../img/techstack/play.png";
import node from "../../img/techstack/node.png";
import express from "../../img/techstack/express.png";

import java from "../../img/techstack/java.png";
import kotlin from "../../img/techstack/kotlin.png";
import jetpackCompose from "../../img/techstack/jetpack-compose.png";

import figma from "../../img/techstack/figma.png";
import affinityDesigner from "../../img/techstack/affinity-designer.png";

import "./tech-skill.css";

function TechnicalSkill() {
  return (
    <div className="container-fluid">
      <div className="tech-stack">
        <div className="d-flex justify-content-center align-items-center mb-5">
          <HorizontalLine />
          <div className="subtitle-3 text-center">Web Development</div>
          <HorizontalLine />
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center tech-icon-list">
          <div className="">
            <img src={html} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={css} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={javascript} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={typescript} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={bootstrap} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={react} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={antDesign} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={mithril} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={node} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={express} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={play} className="img-fluid"></img>
          </div>
        </div>
      </div>

      <div className="tech-stack">
        <div className="d-flex justify-content-center align-items-center mb-5">
          <HorizontalLine />
          <div className="subtitle-3 text-center">Android Development</div>
          <HorizontalLine />
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center tech-icon-list">
          <div className="">
            <img src={java} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={kotlin} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={jetpackCompose} className="img-fluid"></img>
          </div>
        </div>
      </div>

      <div className="tech-stack">
        <div className="d-flex justify-content-center align-items-center mb-5">
          <HorizontalLine />
          <div className="subtitle-3 text-center">Tools</div>
          <HorizontalLine />
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center tech-icon-list">
          <div className="">
            <img src={figma} className="img-fluid"></img>
          </div>
          <div className="">
            <img src={affinityDesigner} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkill;
