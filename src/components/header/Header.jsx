import React from "react";
import Logo from "../../assets/logo.png";
import Button from "../buttonComponents/Button";
import HeaderStyle from "./header.module.css";

const Header = () => {
  const links = ["About", "Skills", "Portfolio"];
  return (
    <div className={`${HeaderStyle.headerCon}`}>
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
            <Button />
        </div>
      </div>
    </div>
  );
};

export default Header;
