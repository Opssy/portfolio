import React from "react";
import HeroImg from "../../assets/heroimg.png";
import HeroStyle from "./hero.module.css";

const Hero = () => {
  return (
    <div className={`${HeroStyle.heroCon}`}>
      <div className="container">
        <div className={`${HeroStyle.heroArea}`}>
          <div className={`${HeroStyle.heroLeft}`}></div>
          <div className={`${HeroStyle.heroRight}`}>
            <img src={HeroImg} alt="hero_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
