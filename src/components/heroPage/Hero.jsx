import React from "react";
import HeroImg from "../../assets/heroimg.png";
import HappyImg from "../../assets/happy.png";
import HeroStyle from "./hero.module.css";
import Button from "../buttonComponents/Button";

const Hero = () => {
  return (
    <section className={`${HeroStyle.heroCon}`}>
      <div className="container">
        <div className={`${HeroStyle.heroArea}`}>
          <div className={`${HeroStyle.heroLeft}`}>
            <h4>
              Hello there <img src={HappyImg} alt="smiling_emoji" />
            </h4>
            <h1>Hi, I am Temitope Williams (TEMS)</h1>
            <p>
              I am a product designer, Ux researcher and a front-end developer
            </p>
            <div className={`${HeroStyle.buttons}`}>
              <Button
                className={`${HeroStyle.firstbtn}`}
                text="Read More"
                link="aboutme"
              />
              <Button
                className={`${HeroStyle.secondbtn}`}
                text="Download Resume"
                link="/resume"
              />
            </div>
          </div>
          <div className={`${HeroStyle.heroRight}`}>
            <img src={HeroImg} alt="hero_image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
