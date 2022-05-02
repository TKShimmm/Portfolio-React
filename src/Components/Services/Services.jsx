import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

function Services() {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          commodo est ac dui auctor,
          <br />
          et volutpat lectus mattis.
        </span>
        <a href="">
          <button className="button s-button">Download</button>
        </a>
      </div>
      <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>

      {/* right side */}
      <div className="cards">
        {/* First Card */}
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </div>

        {/* Second Card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, CSS, JavaScript, React"}
          />
        </div>

        {/* Third Card */}
        <div style={{ top: "19rem", left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam"
            }
          />
        </div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        <div
          className="blur s-blur1"
          style={{ background: "var(--blue∑)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
