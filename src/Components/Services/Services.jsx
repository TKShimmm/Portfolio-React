import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { motion } from "framer-motion";

import { themeContext } from "../../Context";
import { useContext } from "react";

function Services() {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Service">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
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
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>

        {/* Second Card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, CSS, JavaScript, React, Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>

        {/* Third Card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam"
            }
          />
        </motion.div>

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
