import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import GlassesImoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello! I Am</span>
          <span>TK Shim</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            commodo est ac dui auctor, et volutpat lectus mattis. Duis tempus
            porttitor euismod. Mauris facilisis nisi at lacinia interdum. Nunc
            ac.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <img src={GlassesImoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgba(238 210 255)" }}></div>
        <div className="blur" style={{ background: "#C1F5FF", top: "17rem", width: "21rem", height: '11rem', left: "-9rem" }}></div>
      </div>
    </div>
  );
}

export default Intro;
