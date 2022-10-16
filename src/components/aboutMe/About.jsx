import React from "react";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Behance from "../../assets/behance.png";
import Dribble from "../../assets/dribble.png";
import AboutStyle from "../aboutMe/about.module.css";

const About = () => {
  const aboutLinks = [
    {
      img: Facebook,
      link: "Facebook",
    },
    {
      img: Instagram,
      link: "Instagram",
    },
    {
      img: Linkedin,
      link: "Linkedlin",
    },
    {
      img: Github,
      link: "Github",
    },
    {
      img: Behance,
      link: "Behance",
    },
    {
      img: Dribble,
      link: "Dribble",
    },
  ];
  return (
    <section id="About" className={`${AboutStyle.aboutCon}`}>
      <div className="container">
        <div className={`${AboutStyle.aboutArea}`}>
          <h2>About Me</h2>
          <p>
            I’m a goal-focused individual with 4 years of experience in UI/UX
            design. I’m passionate about creating a user-centered design,
            gathering and translating user data into design decisions and
            products. My current position as a Product Designer has allowed me
            to hone a key design eye while utilizing top-notch technical
            ability. I can design user-interface smooth pages that promote user
            interaction with the information and in addition to good visual
            abilities, I also possess great presentation skills that allow me to
            successfully present design ideas to stakeholders. I am an
            enthusiastic and creative product designer with experience, skilled
            at turning the objective of the product into a functional user
            experience. A seasoned leader and program manager with outstanding
            communication and problem-solving skills. Able to make firm
            decisions in favor of the client.
          </p>
          <div className={`${AboutStyle.Links}`}>
            {aboutLinks.map(({ img, link }, index) => (
              <a href={`${link}`}>
                <div key={index} className={`${AboutStyle.Link}`}>
                  <img src={img} alt={link} />
                  <p>{link}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
