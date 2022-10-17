import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import Button from "../buttonComponents/Button";
import HeaderStyle from "./header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const links = ["About", "Skills", "Portfolio"];
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const nav = document.querySelector("header");
      if (e.currentTarget.scrollY > 50) {
        nav.classList.add("nav__scrolled");
      } else {
        nav.classList.remove("nav__scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${HeaderStyle.headerCon}`}>
      <div className="container">
        <div className={`${HeaderStyle.headerArea}`}>
          <div className={`${HeaderStyle.logo}`}>
            <img src={Logo} alt="logo" />
          </div>
          <ul className={`${HeaderStyle.links}`}>
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
          <Button
            className={`${HeaderStyle.button}`}
            text="Contact Me"
            link="contactme"
          />
          <span className={`${HeaderStyle.toggle}`}>
            {mobile ? (
              <FaTimes onClick={() => setMobile(false)} size={25} />
            ) : (
              <FaBars onClick={() => setMobile(true)} size={25} />
            )}
          </span>
        </div>
        {/* mobileMenu */}
        <div className={`${HeaderStyle.mobileMenu}`}>
          <ul className={`${HeaderStyle.links} ${!mobile ? `top` : `noneT`}`}>
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
            <Button
              className={`${HeaderStyle.Mobilebutton}`}
              text="Contact Me"
              link="contactme"
            />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
