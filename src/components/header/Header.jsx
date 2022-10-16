import React from "react";
import Logo from "../../assets/logo.png";
import HeaderStyle from "./header.module.css";

const Header = () => {
  const links = ["About", "Skills", "Portfolio"];
  return (
    <div className={`${HeaderStyle.headerCon}`}>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
