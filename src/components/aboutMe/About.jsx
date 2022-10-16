import React from "react";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Behance from "../../assets/behance.png";
import Dribble from "../../assets/dribble.png";

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
  return <div>About</div>;
};

export default About;
