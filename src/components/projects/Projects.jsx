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
    <section id="Portfolio" className={`${ProjectStyle.projectCon}`}>
      <div className="container">
        <div className={`${ProjectStyle.projectArea}`}>
          <h2>My Designs</h2>
          <div className={`${ProjectStyle.projects}`}>
            {projectsData.map(({ img, title, details, link }, i) => (
              <div className={`${ProjectStyle.project}`} key={i}>
                <img src={img} alt={title} />
                <div className={`${ProjectStyle.projectDetails}`}>
                  <h2>
                    <a href={`${link}`}>{title}</a>
                  </h2>
                  <p>{details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
