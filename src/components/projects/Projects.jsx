import React from "react";
import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import ProjectStyle from "./project.module.css";

const Projects = () => {
  const projectsData = [
    {
      img: Project1,
      title: "Eddyies Gadget",
      details: "A platform for buying gadgets",
      link: "/gadget.app",
    },
    {
      img: Project2,
      title: "Fitted",
      details: "A platform for buying fitted jeans",
      link: "/jeans.app",
    },
  ];
  return (
    <section id="Portfolio" className={`${ProjectStyle.projctCon}`}>
      <div className="container">
        <div className={`${ProjectStyle.projctArea}`}></div>
      </div>
    </section>
  );
};

export default Projects;
