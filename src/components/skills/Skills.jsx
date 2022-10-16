import React from "react";
import Figma from "../../assets/figma.png";
import Adobe from "../../assets/adobe.png";
import Adobe2 from "../../assets/adobe2.png";
import Adobe3 from "../../assets/adobe3.png";
import Adobe4 from "../../assets/adobe4.png";
import Adobe5 from "../../assets/adobe5.png";
import Adobe6 from "../../assets/adobe6.png";
import Invision from "../../assets/invision.png";
import Invision2 from "../../assets/invision2.png";
import Framer from "../../assets/framer.png";
import Marvel from "../../assets/marvel.png";
import Zeplin from "../../assets/zeplin.png";
import SkilStyles from "./skills.module.css";

const Skills = () => {
  const skillsData = [
    {
      img: Figma,
      name: "Figma",
    },
    {
      img: Adobe,
      name: "Adobe Xd",
    },
    {
      img: Adobe2,
      name: "Photoshop",
    },
    {
      img: Adobe3,
      name: "Adobe Illustrator",
    },
    {
      img: Adobe4,
      name: "Indesign",
    },
    {
      img: Invision,
      name: "Invision",
    },
    {
      img: Invision2,
      name: "Invision",
    },
    {
      img: Framer,
      name: "Framer",
    },
    {
      img: Marvel,
      name: "Marvel",
    },
    {
      img: Adobe5,
      name: "After Effects",
    },
    {
      img: Adobe6,
      name: "Incopy",
    },
    {
      img: Zeplin,
      name: "Zeplin",
    },
  ];

  return (
    <section id="Skills" className={`${SkilStyles.skillCon}`}>
      <div className="container">
        <div className={`${SkilStyles.skillArea}`}>
          <h2>Skiils</h2>
        </div>
      </div>
    </section>
  );
};

export default Skills;
